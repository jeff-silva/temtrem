<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    use \Illuminate\Database\Eloquent\SoftDeletes;
    
    protected $table = 'business';
    protected $fillable = [
        'id',
        'user_id',
        'parent',
        'name',
        'description',
        'photo',
        'type',
        'virtual',
        'category',
        'price',
        'promo',
        'gallery',
        'lat',
        'lng',
        'route',
        'number',
        'complement',
        'zipcode',
        'district',
        'city',
        'state',
        'st',
        'country',
        'co',
    ];

    protected $attributes = [
        'user_id' => '',
        'parent' => '',
        'name' => '',
        'description' => '',
        'photo' => '',
        'virtual' => '',
        'type' => '', // business|product|service|rent
        'type_name' => '',
        'category' => '',
        'price' => 0,
        'promo' => 0,
        'gallery' => [],
        'lat' => '',
        'lng' => '',
        'route' => '',
        'number' => '',
        'complement' => '',
        'zipcode' => '',
        'district' => '',
        'city' => '',
        'state' => '',
        'st' => '',
        'country' => '',
        'co' => '',
        'created_at' => '',
        'updated_at' => '',
    ];

    protected $appends = [
        'type_name',
        'type_photo',
        'category_name',
        'category_photo',
    ];

    public $jsMethods = [
        'save' => [],
        'remove' => [
            'confirm' => 'Tem certeza que deseja deletar ${this.name}?',
        ],
        'search' => [],
        'types' => [],
        'categories' => [],
    ];

    public function setGalleryAttribute($value) {
        if (is_array($value)) { $value = json_encode($value); }
        $this->attributes['gallery'] = $value;
    }

    public function getGalleryAttribute() {
        $value = '[]';
        if (is_string($this->attributes['gallery'])) {
            $value = json_decode($this->attributes['gallery']);
        }
        return is_array($value)? $value: [];
    }

    public function getTypeNameAttribute($value) {
        $types = $this->types();
        return isset($types[$this->type])? $types[$this->type]['name']: '';
    }

    public function getTypePhotoAttribute($value) {
        $types = $this->types();
        return isset($types[$this->type])? $types[$this->type]['photo']: '';
    }

    public function getCategoryNameAttribute($value) {
        $categories = $this->categories();
        return isset($categories[$this->category])? $categories[$this->category]['name']: '';
    }

    public function getCategoryPhotoAttribute($value) {
        $categories = $this->categories();
        return isset($categories[$this->category])? $categories[$this->category]['photo']: '';
    }


    public function remove()
    {
        return $this->delete();
    }

    public function search($params=[]) {
        $params = (object) array_merge([
            'user_id' => false,
            'type' => false,
            'category' => false,
            'q' => false,
            'lat_min' => false,
            'lat_max' => false,
            'lng_min' => false,
            'lng_max' => false,
        ], $params);

        $query = $this;

        if ($params->user_id) {
            $query = $query->where('user_id', $params->user_id);
        }

        if ($params->type) {
            $query = $query->where('type', $params->type);
        }

        if ($params->category) {
            $query = $query->where('category', $params->category);
        }

        if ($params->category) {
            $query = $query->where('category', $params->category);
        }

        if ($params->lat_min AND $params->lat_max AND $params->lng_min AND $params->lng_max) {
            $query = $this->where('lat', '>=', $params->lat_min)
                ->where('lat', '<=', $params->lat_max)
                ->where('lng', '>=', $params->lng_min)
                ->where('lng', '<=', $params->lng_max);
        }


        return $query->get();
    }


    public function deployMigration($artisan, $table, $fields)
    {
        return [
            'user_id' => ['integer'],
            'parent' => ['integer'],
            'virtual' => ['integer'],
            'name' => ['string'],
            'description' => ['string'],
            'photo' => ['string'],
            'type' => ['string'],
            'category' => ['string'],
            'price' => ['decimal', 10, 2],
            'promo' => ['decimal', 10, 2],
            'gallery' => ['longText'],
            'lat' => ['decimal', 10, 7],
            'lng' => ['decimal', 10, 7],
            'route' => ['string'],
            'number' => ['string'],
            'complement' => ['string'],
            'zipcode' => ['string'],
            'district' => ['string'],
            'city' => ['string'],
            'state' => ['string'],
            'st' => ['string'],
            'country' => ['string'],
            'co' => ['string'],
        ];
    }


    public function deploySeed($artisan, $exists)
    {
        if ($exists OR 'local'!=env('local')) return;
        for($x=1; $x<=100; $x++) {
            $artisan->comment("Insert item $x");
            $faker = \Faker\Factory::create();
            $save = array_merge($this->toArray(), [
                'user_id' => 1,
                'name' => $faker->name(),
                'description' => $faker->text(),
                'type' => $faker->randomElement(self::types())['slug'],
                'virtual' => $faker->randomElement([0, 1]),
                'category' => $faker->randomElement(self::categories())['slug'],
                'price' => $faker->randomFloat(2, 0, 999),
                'route' => $faker->streetName(),
                'complement' => $faker->secondaryAddress(),
                'number' => $faker->buildingNumber(),
                'zipcode' => $faker->postcode(),
                'district' => $faker->citySuffix(),
                'city' => $faker->city(),
                'state' => $faker->state(),
                'st' => $faker->stateAbbr(),
                'country' => $faker->country(),
                'lat' => $faker->latitude(),
                'lng' => $faker->longitude(),
            ]);
            (new static($save))->save();
        }
    }
    

    public function deployModels($artisan, $models=[])
    {
        $models['productCategories'] = array_values(static::categories());
        $models['productTypes'] = array_values(static::types());
        return $models;
    }



    public function endpoints()
    {
        \Route::get('/categories', function() {
            $categories = static::categories();
            return array_values($categories);
        });


        \Route::get('/business-search', function() {
            $request = request();

            $types = $this->types();
            $categories = $this->categories();
            // dd($types, $categories);
            
            $query = $this->where('lat', '>=', $request->input('latMin'))
                ->where('lat', '<=', $request->input('latMax'))
                ->where('lng', '>=', $request->input('lngMin'))
                ->where('lng', '<=', $request->input('lngMax'));

            // dd(\Str::replaceArray('?', $query->getBindings(), $query->toSql()));

            $results = [];
            foreach($query->get() as $item) {
                if (isset($types[$item->type]) AND $type = $types[$item->type]) {
                    $item->type_name = $type['name'];
                    $item->type_photo = $type['photo'];
                }

                if (isset($categories[$item->category]) AND $cat = $categories[$item->category]) {
                    $item->category_name = $cat['name'];
                    $item->category_photo = $cat['photo'];
                }

                $results[] = $item;
            }

            return $results;
        });
    }

    
    static function types()
    {
        $types['business'] = [
            'name' => 'Negócio',
            'description' => 'É um negócio, empresa ou loja física ou virtual',
            'photo' => 'https://image.flaticon.com/icons/svg/572/572701.svg',
        ];
        
        $types['product'] = [
            'name' => 'Produto',
            'description' => 'É um produto final físico ou virtual',
            'photo' => 'https://image.flaticon.com/icons/svg/2125/2125378.svg',
        ];

        $types['service'] = [
            'name' => 'Serviço',
            'description' => 'É uma prestação de serviço físico ou virtual',
            'photo' => 'https://image.flaticon.com/icons/svg/2962/2962817.svg',
        ];
        
        $types['rent'] = [
            'name' => 'Locação',
            'description' => 'É uma locação, de imóveis, automóveis e bens físicos ou virtuais',
            'photo' => 'https://image.flaticon.com/icons/svg/2590/2590551.svg',
        ];

        foreach($types as $i=>$type) { $types[$i]['slug'] = $i; }
        return $types;
    }

    
    static function categories()
    {
        // Administrativo
        $categories['syndic'] = [
            'name' => 'Síndico(a)', 
            'photo' => 'https://image.flaticon.com/icons/svg/2206/2206248.svg',
            'description' => 'Administração condominial',
        ];
        $categories['contab'] = [
            'name' => 'Contabilidade', 
            'photo' => 'https://image.flaticon.com/icons/svg/2942/2942260.svg',
            'description' => 'Serviços contábeis, declaração de impostos',
        ];
        $categories['secretary'] = [
            'name' => 'Secretariado', 
            'photo' => 'https://image.flaticon.com/icons/svg/1995/1995511.svg',
            'description' => 'Profissionais secretariais, auxiliares',
        ];
        // $categories['marketing'] = [
        //     'name' => 'Marketing', 
        //     'photo' => '',
        //     'description' => '',
        // ];
        $categories['redactor'] = [
            'name' => 'Redator(a)', 
            'photo' => 'https://image.flaticon.com/icons/svg/603/603580.svg',
            'description' => 'Redação, roteiros, scripts, matérias, ghost writing, listas, copywriter',
        ];
        $categories['advertising'] = [
            'name' => 'Publicidade', 
            'photo' => 'https://image.flaticon.com/icons/svg/595/595990.svg',
            'description' => 'Profissionais da área de publicidade e propaganda',
        ];
        // $categories['socialmedia'] = [
        //     'name' => 'Social Media', 
        //     'photo' => '',
        //     'description' => '',
        // ];

        // Artístico, talentos
        $categories['designer'] = [
            'name' => 'Designer', 
            'photo' => 'https://image.flaticon.com/icons/svg/881/881883.svg',
            'description' => 'Designers gráficos, de interface, web designers',
        ];
        $categories['drawing'] = [
            'name' => 'Pintores e desenhistas', 
            'photo' => 'https://image.flaticon.com/icons/svg/1165/1165800.svg',
            'description' => 'Pintores, desenhistas, ilustradores, coloristas, artes digitais',
        ];
        $categories['musician'] = [
            'name' => 'Músicos', 
            'photo' => 'https://image.flaticon.com/icons/svg/978/978303.svg',
            'description' => 'Músicos, produtores músicais, beatmakers, arranjadores',
        ];
        $categories['videographer'] = [
            'name' => 'Video',
            'photo' => 'https://image.flaticon.com/icons/svg/2422/2422033.svg',
            'description' => 'Videógrafos, diretores, filmagens',
        ];
        $categories['craft'] = [
            'name' => 'Video',
            'photo' => 'https://image.flaticon.com/icons/svg/2534/2534963.svg',
            'description' => 'Artesanato, produtos feitos a mão',
        ];

        // Saúde/Bem estar
        $categories['medicine'] = [
            'name' => 'Médico', 
            'photo' => 'https://image.flaticon.com/icons/svg/846/846961.svg',
            'description' => 'Clínicos gerais, ortopedistas, dermatologistas, fisioterapeutas',
        ];
        $categories['dentist'] = [
            'name' => 'Dentistas', 
            'photo' => 'https://image.flaticon.com/icons/svg/846/846941.svg',
            'description' => 'Dentistas',
        ];
        $categories['nutrition'] = [
            'name' => 'Nutricionista', 
            'photo' => 'https://image.flaticon.com/icons/svg/1226/1226166.svg',
            'description' => 'Profissionais da área da saúde em alimentação',
        ];
        // $categories['nursing'] = [
        //     'name' => 'Técnico em Enfermagem', 
        //     'photo' => '',
        //     'description' => '',
        // ];
        $categories['massage'] = [
            'name' => 'Massagem, massoterapia', 
            'photo' => 'https://image.flaticon.com/icons/svg/2470/2470600.svg',
            'description' => 'Massagem, massoterapia',
        ];
        $categories['makeup'] = [
            'name' => 'Maquiadora', 
            'photo' => 'https://image.flaticon.com/icons/svg/1005/1005735.svg',
            'description' => 'Maquiagem em geral',
        ];
        $categories['manipedicure'] = [
            'name' => 'Manicure/Pedicure', 
            'photo' => 'https://image.flaticon.com/icons/svg/3056/3056496.svg',
            'description' => 'Manicure/pedicure',
        ];

        // Vendas
        $categories['realstatebroker'] = [
            'name' => 'Corretor de imóveis', 
            'photo' => 'https://image.flaticon.com/icons/svg/2558/2558016.svg',
            'description' => 'Corretor de imóveis',
        ];
        // $categories['franchisee'] = [
        //     'name' => 'Franqueado', 
        //     'photo' => '',
        //     'description' => '',
        // ];
        $categories['cosmetic'] = [
            'name' => 'Cosméticos', 
            'photo' => 'https://image.flaticon.com/icons/svg/3163/3163195.svg',
            'description' => 'Cosméticos',
        ];
        $categories['clothes'] = [
            'name' => 'Roupas', 
            'photo' => 'https://image.flaticon.com/icons/svg/2912/2912358.svg',
            'description' => 'Camisas, calças, vestidos, bermidas, masculino, feminino, infantil',
        ];

        // Comunicação
        $categories['translator'] = [
            'name' => 'Tradutor', 
            'photo' => 'https://image.flaticon.com/icons/svg/3068/3068550.svg',
            'description' => 'Serviços de tradução, tradução simultânea',
        ];
        $categories['libras'] = [
            'name' => 'Intérprete de libras', 
            'photo' => 'https://image.flaticon.com/icons/svg/2653/2653817.svg',
            'description' => 'Intérprete de libras',
        ];
        $categories['photographer'] = [
            'name' => 'Fotógrafo', 
            'photo' => 'https://image.flaticon.com/icons/svg/2317/2317988.svg',
            'description' => 'Fotografia para eventos em geral',
        ];
        $categories['influencer'] = [
            'name' => 'Influenciador digital', 
            'photo' => 'https://image.flaticon.com/icons/svg/874/874711.svg',
            'description' => 'Influenciador digital',
        ];

        // Obras
        $categories['civilengineer'] = [
            'name' => 'Engenharia civil',
            'photo' => 'https://image.flaticon.com/icons/svg/1863/1863520.svg',
            'description' => 'Serviços de engenharia civil em geral',
        ];
        $categories['architect'] = [
            'name' => 'Arquitetura', 
            'photo' => 'https://image.flaticon.com/icons/svg/3305/3305955.svg',
            'description' => 'Serviços de arquitetura em geral',
        ];
        $categories['interiordesigner'] = [
            'name' => 'Design de Interiores', 
            'photo' => 'https://image.flaticon.com/icons/svg/1221/1221844.svg',
            'description' => 'Design de Interiores em geral',
        ];
        $categories['construction'] = [
            'name' => 'Profisisonal de obras',
            'photo' => 'https://image.flaticon.com/icons/svg/809/809123.svg',
            'description' => 'Mestre de obras, pedreiros, peões, ajudantes',
        ];
        $categories['furniturerepair'] = [
            'name' => 'Reparador de móveis', 
            'photo' => 'https://image.flaticon.com/icons/svg/595/595625.svg',
            'description' => 'Reparador de móveis',
        ];
        $categories['painter'] = [
            'name' => 'Pintor', 
            'photo' => 'https://image.flaticon.com/icons/svg/2177/2177973.svg',
            'description' => 'Serviços de pintura e acabamento em geral',
        ];
        
        // Alimentação
        $categories['cook'] = [
            'name' => 'Cozinha', 
            'photo' => 'https://image.flaticon.com/icons/svg/2367/2367775.svg',
            'description' => 'Cozinheiro(a), auxiliar',
        ];
        $categories['confectioner'] = [
            'name' => 'Confeitaria', 
            'photo' => 'https://image.flaticon.com/icons/svg/2965/2965567.svg',
            'description' => 'Fabricação de bolos, doces',
        ];
        $categories['alcoholicbeveragemanufacturer'] = [
            'name' => 'Fabricação de bebidas alcoólicas', 
            'photo' => 'https://image.flaticon.com/icons/svg/2289/2289662.svg',
            'description' => 'Fabricação de cervejas, destilados, vinhos',
        ];

        // Cuidados
        $categories['babysitter'] = [
            'name' => 'Babá', 
            'photo' => 'https://image.flaticon.com/icons/svg/3209/3209133.svg',
            'description' => 'Cuidados com crianças em geral',
        ];
        $categories['elderlycaregiver'] = [
            'name' => 'Cuidador de Idosos', 
            'photo' => 'https://image.flaticon.com/icons/svg/2512/2512413.svg',
            'description' => 'Serviços de cuidados a melhor idade',
        ];
        $categories['petsitter'] = [
            'name' => 'Pet sitter', 
            'photo' => 'https://image.flaticon.com/icons/svg/3111/3111470.svg',
            'description' => 'Cuidadores de pets, passeadores, banho, tosa',
        ];

        // Ensino
        $categories['coach'] = [
            'name' => 'Coach', 
            'photo' => 'https://image.flaticon.com/icons/svg/814/814277.svg',
            'description' => 'Serviços de coach em geral',
        ];
        $categories['teacher'] = [
            'name' => 'Professor(a)',
            'photo' => 'https://image.flaticon.com/icons/svg/3315/3315598.svg',
            'description' => 'Serviços de ensino e cursos em geral',
        ];

        // Transporte
        $categories['bike'] = [
            'name' => 'Bicicleta', 
            'photo' => 'https://image.flaticon.com/icons/svg/3048/3048740.svg',
            'description' => 'Entregadores, mensageiros',
        ];
        $categories['car'] = [
            'name' => 'Carro', 
            'photo' => 'https://image.flaticon.com/icons/svg/2481/2481725.svg',
            'description' => 'Chofer, translado',
        ];
        $categories['motorcycle'] = [
            'name' => 'Moto', 
            'photo' => 'https://image.flaticon.com/icons/svg/1365/1365537.svg',
            'description' => 'Motoboys e motogirls, serviços de entrega em motocicleta no geral',
        ];
        $categories['van'] = [
            'name' => 'Van', 
            'photo' => 'https://image.flaticon.com/icons/svg/3142/3142119.svg',
            'description' => 'Transporte de pessoas ou grandes quantidades de produtos',
        ];
        $categories['bus'] = [
            'name' => 'Ônibus e microônibus', 
            'photo' => 'https://image.flaticon.com/icons/svg/741/741411.svg',
            'description' => 'Motoristas e fretamento',
        ];
        $categories['truck'] = [
            'name' => 'Caminhão', 
            'photo' => 'https://image.flaticon.com/icons/svg/2882/2882047.svg',
            'description' => 'Transporte de grandes cargas, mudanças',
        ];

        // Esporte e Lazer
        $categories['touristguide'] = [
            'name' => 'Guia turístico', 
            'photo' => 'https://image.flaticon.com/icons/svg/2268/2268568.svg',
            'description' => 'Serviços de guita turístico',
        ];
        $categories['eventorganizer'] = [
            'name' => 'Organizador de festas e eventos', 
            'photo' => 'https://image.flaticon.com/icons/svg/3154/3154268.svg',
            'description' => 'Organizações de festas, eventos, buffets',
        ];
        $categories['partydj'] = [
            'name' => 'DJ', 
            'photo' => 'https://image.flaticon.com/icons/svg/3058/3058956.svg',
            'description' => 'Serviços de DJ em geral',
        ];

        // Tecnologia
        $categories['developer'] = [
            'name' => 'Programação e desenvolvimento', 
            'photo' => 'https://image.flaticon.com/icons/svg/867/867644.svg',
            'description' => 'Desenvolvimento de apps, sites, lojas, softwares',
        ];
        $categories['support'] = [
            'name' => 'Suporte e manutenção', 
            'photo' => 'https://image.flaticon.com/icons/svg/868/868784.svg',
            'description' => 'Instalação de softwares, formatação, manutenção',
        ];
        $categories['wire'] = [
            'name' => 'Redes internas', 
            'photo' => 'https://image.flaticon.com/icons/svg/2162/2162560.svg',
            'description' => 'Instalação de circuitos internos, telefonia, redes de computadores',
        ];

        // Casa
        $categories['diarist'] = [
            'name' => 'Diaristas', 
            'photo' => 'https://image.flaticon.com/icons/svg/578/578079.svg',
            'description' => 'Diaristas, empregadas domésticas',
        ];
        $categories['plumber'] = [
            'name' => 'Bombeiro hidráulico', 
            'photo' => 'https://image.flaticon.com/icons/svg/1846/1846844.svg',
            'description' => 'Bombeiro hidráulico, encanador, desentupidor',
        ];
        $categories['electrician'] = [
            'name' => 'Eletricista', 
            'photo' => 'https://image.flaticon.com/icons/svg/2177/2177980.svg',
            'description' => 'Serviços elétricos em geral',
        ];
        $categories['gardner'] = [
            'name' => 'Jardinagem', 
            'photo' => 'https://image.flaticon.com/icons/svg/1073/1073960.svg',
            'description' => 'Jardinagem, limpeza de quintais e lotes',
        ];
        $categories['carwash'] = [
            'name' => 'Lavagem de carro', 
            'photo' => 'https://image.flaticon.com/icons/svg/814/814404.svg',
            'description' => 'Limpeza de automóveis, interior e exterior',
        ];

        // Aluguel
        $categories['renthouse'] = [
            'name' => 'Aluguel de imóveis', 
            'photo' => 'https://image.flaticon.com/icons/svg/3079/3079182.svg',
            'description' => 'Locação de imóveis residenciais',
        ];

        // Outros
        $categories['404'] = [
            'name' => 'Não encontrado', 
            'photo' => 'https://image.flaticon.com/icons/svg/763/763727.svg',
            'description' => 'Selecione esta opção e entraremos em contato ;)',
        ];

        /*

        1) Qual o seu tipo de negócio
            - Produtos, serviços e locação
            - Digital, Físico
            - Fabricação, utilização, conserto, descarte, reciclagem

        Recicladores
        https://image.flaticon.com/icons/svg/3141/3141542.svg

        Locadores (equipamentos fotograficos, notebooks, câmeras, carros, casas)
        Conserto de celulares, computadores, televisões, tablets
        Caseiro, pscineiro
        Venda de carne de abate (galinhas, peixe, porco, boi, etc)
        Venda de hortifruti
        Costureiras, venda e conserto de roupas
        Agência de emprego
        Doações
        Editores de video
        Beatmakers
        Serviços de cartografia
        Pet: doação de animais, venda de ração, acessórios, remédios, cuidados, castração
        Advogados
        Importadores
        Detetização

        Categorias proibidas:
        - Venda de animais

        Algumas categorias, como médicos ou advogados, precisam ter licença

        */

        foreach($categories as $i=>$cat) { $categories[$i]['slug'] = $i; }
        return $categories;
    }
}
