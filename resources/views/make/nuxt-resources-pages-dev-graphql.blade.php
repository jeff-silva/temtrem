<template><div>
	<div class="row">
		<div class="col-6">
			<el-select v-model="graphql" :filterable="true">
				<el-option v-for="g in graphqls" :key="g.id"
					:value="g" :label="g.label"
				>@{{ g.label }}</el-option>
			</el-select>
			<ui-code v-model="graphql.query" class="mt-3"></ui-code>
			<div class="mt-3 d-flex align-items-center">
				<div class="flex-grow-1">
					<a href="https://lighthouse-php.com/master/eloquent/complex-where-conditions.html#usage" target="_blank">Documentação sobre queries complexas</a>
				</div>
				<div><button type="button" class="btn btn-primary" @click="runGraphql()">
					<i class="fas fa-play"></i> Executar
				</button></div>
			</div>
		</div>
		<div class="col-6" style="position:relative; max-height:600px;">
			<pre class="p-2 bg-dark text-white" style="height:100%; overflow:auto;">Resultado: @{{ result }}</pre>
		</div>
	</div>
</div></template>

<?php

$data = [];
$data['graphql'] = false;
$data['graphqls'] = [];

$data['graphqls'][] = [
	'id' => uniqid(),
	'label' => 'Teste',
	'query' => implode("\n", [
		"query {",
		"\ttest(name:\"Jonh Doe\")",
		"}",
	]),
];

foreach($schema->tables as $index=>$table) {
	if (! $table->getConfig('model')) continue;

	// Lista querys
	$fields = $table->FieldNames;

	foreach($table->hasMany as $method=>$methodData) {
		$fields[] = \Str::of($methodData->model->Name)->plural() . " {id}";
	}

	foreach($table->belongsTo as $method=>$methodData) {
		$fields[] = $methodData->model->Name . " {id}";
	}

	$data['graphqls'][] = [
		'id' => "{$index}-0",
		'label' => "Encontrar {$table->Model->Name}",
		'query' => implode("\n", [
			"query {",
			"\t{$table->Model->Name}(id:1) {",
			"\t\t".implode(",\n\t\t", $fields),
			"\t}",
			"}",
		]),
	];


	$method = \Str::of($table->Model->Name)->plural();
	$data['graphqls'][] = [
		'id' => "{$index}-1",
		'label' => "Buscar {$method}",
		'query' => implode("\n", [
			"query {",
			"\t{$method}(",
			"\t\tfirst: 10",
			"\t\tpage: 1",
			"\t\torderBy: [",
			"\t\t\t{column: ID, order: DESC},",
			"\t\t]",
			"\t)",
			"\t{",
			"\t\tdata {",
			"\t\t\t".implode(",\n\t\t\t", $fields),
			"\t\t}",
			"\t}",
			"}",
		]),
	];

	$updateFields = array_filter($table->Fields, function($col) {
		return $col->getConfig('in_form');
	});

	$updateFieldNames = array_map(function($col) {
		return $col->Field;
	}, $updateFields);

	$updateFieldTypes = array_filter(array_map(function($col) {
		if (! $col->getConfig('in_form')) return false;
		return "{$col->Field}: {$col->GraphqlType}";
	}, $updateFields), 'strlen');

	$data['graphqls'][] = [
		'id' => "{$index}-2",
		'label' => "Criar {$method}",
		'query' => implode("\n", [
			"mutation {",
			"\tcreate{$table->Model->Name}(",
			"\t\t".implode(",\n\t\t", $updateFieldTypes),
			"\t)",
			"\t{",
			"\t\t".implode(",\n\t\t", $updateFieldNames),
			"\t}",
			"}",
		]),
	];

	$data['graphqls'][] = [
		'id' => "{$index}-3",
		'label' => "Alterar {$method}",
		'query' => implode("\n", [
			"mutation {",
			"\tupdate{$table->Model->Name}(",
			"\t\t".implode(",\n\t\t", $updateFieldTypes),
			"\t)",
			"\t{",
			"\t\t".implode(",\n\t\t", $updateFieldNames),
			"\t}",
			"}",
		]),
	];


	// mutation {
	// 	updateUser(
	// 		id: 5,
	// 		name:"LOL b"
	// 	) {
	// 		id
	// 		name
	// 		updated_at
	// 	}
	// }
}

$data['graphql'] = $data['graphqls'][0];
$data['result'] = false;

?>

<script>
export default {
	data() {
		return <?php echo json_encode($data); ?>;
	},

	methods: {
		runGraphql() {
			this.result = false;
			this.$graphql(this.graphql.query).then(resp => {
				this.result = resp.data;
			});
		},
	},
};
</script>