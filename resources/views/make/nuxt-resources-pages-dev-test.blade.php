<template><div>
	
	@foreach($schema->tables as $table) 
	<div class="mb-4">
		<div class="p-2">
			<div class="row align-items-center">
				<div class="col-12 col-md-4">
					<div class="font-weight-bold text-uppercase mb-3">{{ $table->getConfig('plural') }}</div>
					<pre class="g-dark text-white p-2 m-0"></pre>
					<!-- <pre class="bg-dark text-white p-2 m-0">$store.state.{{ $table->Name }}: @{{ $store.state.{{ $table->Name }} }}</pre> -->
				</div>
				<div class="col-12 col-md-8">
					<div class="form-group">
						<label>Simples</label>
						<ui-{{ $table->Route }} v-model="{{ $table->Singular }}"></ui-{{ $table->Route }}>
						<pre class="bg-dark text-white p-2 m-0">{{ $table->Singular }}: {{ <?php echo $table->Singular; ?> }}</pre>
					</div>
					<div class="form-group">
						<label>Múltiplo</label>
						<ui-{{ $table->Route }} v-model="{{ $table->Plural }}" :multiple="true"></ui-{{ $table->Route }}>
						<pre class="bg-dark text-white p-2 m-0">{{ $table->Plural }}: {{ <?php echo $table->Plural; ?> }}</pre>
					</div>
				</div>
			</div>
		</div>
	</div>
	@endforeach 

</div></template>

<?php

$data = [];
foreach($schema->tables as $table) {
	$data[ $table->Singular ] = '';
	$data[ $table->Plural ] = [1];
}

?>

<script>
export default {
	data() {
		return <?php echo str_replace("\n", "\n\t\t", json_encode($data, JSON_PRETTY_PRINT)); ?>;
	},
};
</script>