<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StoreCategory extends Model
{
    protected $fillable = [
        'id',
        'name',
        'photo',
    ];

    protected $attributes = [
        'id' => false,
        'name' => '',
        'photo' => '',
    ];

    public function tableMigration($table, $fields)
    {
        if (!in_array('name', $fields)) {
            $table->string('name')->nullable();
        }

        if (!in_array('photo', $fields)) {
            $table->string('photo')->nullable();
        }

        if (!in_array('description', $fields)) {
            $table->string('description')->nullable();
        }
    }

    public function tableSeed($created=false)
    {
        $categories = [
            ['name'=>'Administrativo', 'photo'=>'', 'description'=>'', 'children'=>[
                ['name'=>'Síndico Profissional', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Contador', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Secretária Remota', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Marketing', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Redator', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Designer', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Publicitário', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Copywriter', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Social Media', 'photo'=>'', 'description'=>'', 'children'=>[]],
            ]],
            ['name'=>'Saúde/Bem estar', 'photo'=>'', 'description'=>'', 'children'=>[
                ['name'=>'Médico', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Nutricionista', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Fisioterapeuta', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Técnico em Enfermagem', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Massoterapeuta', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Maquiadora', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Manicure/Pedicure', 'photo'=>'', 'description'=>'', 'children'=>[]],
            ]],
            ['name'=>'Vendas', 'photo'=>'', 'description'=>'', 'children'=>[
                ['name'=>'Corretor de Imóveis', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Franqueado', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Revendedor de importados', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Vendedor online de customizados ', 'photo'=>'', 'description'=>'', 'children'=>[]],
            ]],
            ['name'=>'Comunicação', 'photo'=>'', 'description'=>'', 'children'=>[
                ['name'=>'Tradutor', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Intérprete', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Fotógrafo', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Influenciador', 'photo'=>'', 'description'=>'', 'children'=>[]],
            ]],
            ['name'=>'Obras', 'photo'=>'', 'description'=>'', 'children'=>[
                ['name'=>'Engenheiro Civil', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Arquiteto', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Designer de Interiores', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Mestre de Obras', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Reparador de Móveis', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Pintor', 'photo'=>'', 'description'=>'', 'children'=>[]],
            ]],
            ['name'=>'Alimentação', 'photo'=>'', 'description'=>'', 'children'=>[
                ['name'=>'Gastrônomo', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Confeiteiro', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Enólogo', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Cozinheiro a domicílio', 'photo'=>'', 'description'=>'', 'children'=>[]],
            ]],
            ['name'=>'Cuidados', 'photo'=>'', 'description'=>'', 'children'=>[
                ['name'=>'Babá', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Cuidador de Idosos', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Pet sitter', 'photo'=>'', 'description'=>'', 'children'=>[]],
            ]],
            ['name'=>'Ensino', 'photo'=>'', 'description'=>'', 'children'=>[
                ['name'=>'Professor Auxiliar', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Professor Pré-ENEM', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Treinador de Carreira', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Professor de Música', 'photo'=>'', 'description'=>'', 'children'=>[]],
            ]],
            ['name'=>'Transporte', 'photo'=>'', 'description'=>'', 'children'=>[
                ['name'=>'Motorista Uber', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Motorista Blablacar', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Taxista', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Entregador iFood', 'photo'=>'', 'description'=>'', 'children'=>[]],
            ]],
            ['name'=>'Esporte e Lazer', 'photo'=>'', 'description'=>'', 'children'=>[
                ['name'=>'E-Sporter', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Guia Turístico', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Stand Up', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Organizador de Festas', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'DJ', 'photo'=>'', 'description'=>'', 'children'=>[]],
            ]],
            ['name'=>'Informatica', 'photo'=>'', 'description'=>'', 'children'=>[
                ['name'=>'Web Designer', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Suporte de TI', 'photo'=>'', 'description'=>'', 'children'=>[]],
                ['name'=>'Programador', 'photo'=>'', 'description'=>'', 'children'=>[]],
            ]],
        ];
    }
}

/*

Produto, Serviço
Alimentação, Saúde

*/