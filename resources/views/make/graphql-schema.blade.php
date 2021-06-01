"A date string with format `Y-m-d`, e.g. `2011-05-23`."
scalar Date @scalar(class: "Nuwave\\Lighthouse\\Schema\\Types\\Scalars\\Date")

"A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`."
scalar DateTime @scalar(class: "Nuwave\\Lighthouse\\Schema\\Types\\Scalars\\DateTime")

directive @whereConditions(
  """
  Restrict the allowed column names to a well-defined list.
  This improves introspection capabilities and security.
  Mutually exclusive with the `columnsEnum` argument.
  """
  columns: [String!]

  """
  Use an existing enumeration type to restrict the allowed columns to a predefined list.
  This allowes you to re-use the same enum for multiple fields.
  Mutually exclusive with the `columns` argument.
  """
  columnsEnum: String
) on ARGUMENT_DEFINITION


<?php foreach($schema->tables as $table): if ($table->getConfig('model')): ?>
input Input{{ $table->Model->Name }} {<?php foreach($table->Fields as $col):
$type = $col->Key=='PRI'? 'ID': $col->GraphqlType;
echo "\n\t{$col->Field}: {$type}";
endforeach; ?> 
}

<?php endif; endforeach; ?>


<?php

$types = array_map(function($file) {
    $info = (object) pathinfo(realpath($file));
    $info->name = "Type{$info->filename}";
    $info->input = [];
    $info->output = [];

    $info->model = app("\App\GraphQL\Queries\\{$info->filename}");

    $_gettype = function($item) {
        return (object) [
            'type' => (is_string($item)? 'String': 'Int'),
            'value' => $item,
        ];
    };

    $info->input = array_map($_gettype, $info->model->input);
    $info->output = array_map($_gettype, $info->model->output);
    $info->args = "\n".implode(",\n", array_map(function($value, $key) {
        return "\t\t{$key}: {$value->type}";
    }, $info->input, array_keys($info->input))) ."\n\t";

    return $info;
}, glob(base_path('/App/GraphQL/Queries') .'/*'));

?>

@foreach($types as $type)
type {{ $type->name }} {@foreach($type->output as $name=>$item) 
    {{ $name }}: {{ $item->type }} @endforeach 
}

@endforeach

type Query {
    @foreach($types as $type) 
    {{ $type->filename }}({{ $type->args }}): {{ $type->name }}
    @endforeach
    <?php
    foreach($schema->tables as $table):
        if (! $table->getConfig('model')) continue;

        $plural = \Str::of($table->Model->Name)->plural();

        echo "\n\n\t{$table->Model->Name} (id: ID @eq): {$table->Model->Name} @find";
        
        echo "\n\n\t{$plural} (";
        echo "\n\t\twhere: _ @whereConditions(columns: [\"id\", \"name\", \"created_at\", \"updated_at\"])";
        echo "\n\t\torderBy: _ @orderBy(columns: [\"id\", \"name\", \"created_at\", \"updated_at\"])";
        echo "\n\t): [{$table->Model->Name}!]! @paginate(type: \"paginator\", first:0, page:1)";
    endforeach; ?> 
}

<?php foreach($schema->tables as $table): ?>
<?php if (! $table->getConfig('model')) continue; ?>
type {{ $table->Model->Name }} {<?php
    foreach($table->Fields as $i => $col):

        $type = 'String';

        if ($col->Key==='PRI') {
            $type = 'ID!';
        }

        // else if (preg_match('/int/', $col->Type)) {
        //     $type = 'DateTime';
        // }

        else if (preg_match('/date|timestamp/', $col->Type)) {
            $type = 'DateTime';
        }

        echo "\n\t{$col->Field}: {$type}";

    endforeach;
    
    foreach($table->hasMany as $methodName=>$item):
        $methodName = \Str::of($item->model->Name)->plural();
        echo "\n\t{$methodName}: [{$item->model->Name}!]! @hasMany";
    endforeach;

    // foreach($table->hasOne as $methodName=>$item):
    //     $methodName = \Str::of($item->model->Name)->singular();
    //     echo "\n\t{$methodName}: [{$item->model->Name}!]! @belongsTo";
    // endforeach;

    foreach($table->belongsTo as $methodName=>$item):
        $methodName = \Str::of($item->model->Name)->singular();
        echo "\n\t{$methodName}: [{$item->model->Name}!]! @belongsTo";
    endforeach;
    ?> 
}

<?php /*
type {{ $table->Model->Name }}Paginator {
    paginatorInfo: PaginatorInfo!
    data: [{{ $table->Model->Name }}!]!
}
*/ ?>

<?php endforeach; ?>

type Mutation {
    @foreach($schema->tables as $table)
    @if ($table->getConfig('model')) 
    create{{ $table->Model->Name }} (input: Input{{ $table->Model->Name }}): {{ $table->Model->Name }} @create
    update{{ $table->Model->Name }} (input: Input{{ $table->Model->Name }}! @spread): {{ $table->Model->Name }} @update
    @endif
    @endforeach 
}
