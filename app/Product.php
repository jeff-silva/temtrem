<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'id',
        'name',
        'photo',
        'price',
    ];

    protected $attributes = [
        'id' => false,
        'name' => '',
        'photo' => '',
        'price' => 0,
    ];

    public function tableMigration($table, $fields)
    {   
        if (!in_array('name', $fields)) {
            $table->string('name')->nullable();
        }

        if (!in_array('photo', $fields)) {
            $table->string('photo')->nullable();
        }

        if (!in_array('price', $fields)) {
            $table->decimal('price', 10, 2)->nullable()->default(0);
        }
    }



    public function endpoints()
    {
        \Route::get('/product/categories', function() {
            $categories = Product::categories();
            return array_values($categories);
        });
    }

    
    static function categories($hierarchical=false)
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

        // Informatica
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

        // Casa
        $categories['diarist'] = [
            'name' => 'Diaristas', 
            'photo' => 'https://image.flaticon.com/icons/svg/578/578079.svg',
            'description' => 'Serviços de limpeza doméstica em geral',
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

        // Outros
        $categories['404'] = [
            'name' => 'Não encontrou?', 
            'photo' => 'https://image.flaticon.com/icons/svg/763/763727.svg',
            'description' => 'Selecione esta opção e entraremos em contato ;)',
        ];

        /*

        1) Qual o seu tipo de negócio
            - Produtos, serviços e locação
            - Digital, Físico
            - Fabricação, utilização, conserto, descarte, reciclagem

        Recicladores
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

        {
            product: {
                id: false,
                parent: false,
                name: '',
                photo: '',
                type: '', //product|service|location
                virtual: true,
                category: '',
                gallery: [],
            },
        }

        */

        foreach($categories as $i=>$cat) { $categories[$i]['slug'] = $i; }
        return $categories;
    }
}
