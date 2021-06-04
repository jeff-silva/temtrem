<?php

namespace App\Traits;

trait Model
{
    public static function bootModel() {
        self::saving(function($model) {
            if (in_array('slug', $model->getFillable()) AND !$model->slug) {
                $model->slug = \Str::slug($model->name);
            }
        });
    }
    
    
    public function validate($data=[]) {
        return \Validator::make($data, []);
    }

    public function store($data=[]) {
        $data = array_merge($this->toArray(), $data);

        $table_name = $this->getTable();
        $table_pk = $this->getKeyName();
        $id = isset($data[$table_pk])? $data[$table_pk]: false;

        if ($validator = $this->validate($data) AND $validator->fails()) {
            throw new \Exception(json_encode([
                'message' => 'Há erros de validação',
                'fields' => $validator->errors(),
            ]));
        }

        if ($id AND $save=self::find($id)) {
            $save->fill($data)->save();
        }
        else {
            $save = self::create($data);
        }

        return $save;
    }


    public function remove($forced=false) {
        if (! $this->id) return false;
        
        if ($forced==false AND \Schema::hasColumn($this->getTable(), 'deleted_at')) {
            $this->deleted_at = date('Y-m-d H:i:s');
            $this->store();
            return $this;
        }

        $this->delete();
        return $this;
    }
    

    /* [
        // Predefined fields
        'select' => 'id,name',
        'orderby' => 'id:desc', // order by id desc
        'orderby' => ['id:desc', 'name:asc'], // order by id desc, name asc
        'page' => 1,
        'perpage' => 10,
        'q' => 'test', // where any field like '%{$q}%'

        // if field is a $fillable item:
        'age' => 35, // where age=35
        'age' => [35,36], // where age in (35, 36)
        'age' => ['op' => '=', 'value' => 35], // where age=35
        'age' => ['op' => '>', 'value' => 35], // where age > 35
        'age' => ['op' => '>=', 'value' => 35], // where age >= 35
        'age' => ['op' => '<', 'value' => 35], // where age < 35
        'age' => ['op' => '<=', 'value' => 35], // where age <= 35
        'age' => ['op' => 'in', 'value' => [35, 36]], // where age in (35, 36)
        'age' => ['op' => 'between', 'value' => [35, 36]], // where age between (35, 36)
        'age' => ['op' => 'empty'], // where (age is null or age='')
        'age' => [
            'relation' => 'or',
            ['field'=>'age', 'op'=>'=', 'value'=>35],
            ['field'=>'age', 'op'=>'=', 'value'=>36],
        ], // where ((age = 35) or (age = 36))
        'name' => ['op' => 'like', 'value' => 'john'], // where name like '%john%'
    ] */
    public function scopeQuerySearch($query, $params=null) {
        $params = $params? $params: request()->all();
        $params = array_merge([
            'q' => '',
            'relation' => 'or',
            'page' => 1,
            'perpage' => 20,
            'orderby' => 'updated_at:desc',
        ], $params);

        $operators = [
            '=' => function($q, $field, $values=[]) {
                return $q->where($field, '=', $values[0]);
            },
            '!=' => function($q, $field, $values=[]) {
                return $q->where($field, '!=', $values[0]);
            },
            '>' => function($q, $field, $values=[]) {
                return $q->where($field, '>', $values[0]);
            },
            '>=' => function($q, $field, $values=[]) {
                return $q->where($field, '>=', $values[0]);
            },
            '<' => function($q, $field, $values=[]) {
                return $q->where($field, '<', $values[0]);
            },
            '<=' => function($q, $field, $values=[]) {
                return $q->where($field, '<=', $values[0]);
            },
            'empty' => function($q, $field, $values=[]) {
                return $q->where(function($q) use($field) {
                    $q->whereNull($field);
                    $q->orWhere($field, '');
                });
            },
            'between' => function($q, $field, $values=[]) {
                return $q->whereBetween($field, $values);
            },
            'in' => function($q, $field, $values=[]) {
                return $q->whereIn($field, $values);
            },
        ];

        $_operate = function($query, $field, $values) use($operators) {
            $operator = array_shift($values);

            if (isset($operators[ $operator ])) {
                $query = call_user_func($operators[ $operator ], $query, $field, $values);
            }

            return $query;
        };

        foreach($params as $field=>$value) {
            if (! in_array($field, $this->fillable)) continue;
            
            if (is_array($value)) {
                if (in_array($value[0], array_keys($operators))) {
                    $query = $_operate($query, $field, $value);
                    continue;
                }

                // foreach($value as $value2) {
                //     if (in_array($value2[0], array_keys($operators))) {
                //         $query = $_operate($query, $field, $value2);
                //         continue;
                //     }
                // }
                
                continue;
            }

            // ?field=value
            $query = $query->where($field, $value);
        }


        // ?orderby=id:desc
        // ?orderby[]=id:desc&updated_at[]=id:desc
        $orders = is_array($params['orderby'])? $params['orderby']: [$params['orderby']];
        foreach($orders as $orderby) {
            list($field, $order) = explode(':', $orderby);
            $query = $query->orderBy($field, $order);
        }

        // ?q=term+search
        if ($params['q']) {
            $terms = preg_split('/[^a-zA-Z0-9]/', $params['q']);
            $whereLikes = [];
            foreach($terms as $q) {
                foreach($this->fillable as $field) {
                    $whereLikes[] = [$field, 'like', "%{$q}%"];
                }
            }
            $query = $query->where(function($q) use($whereLikes) {
                foreach($whereLikes as $w) {
                    $q->orWhere($w[0], $w[1], $w[2]);
                }
            });
        }

        return $query->paginate($params['perpage']);
    }
}