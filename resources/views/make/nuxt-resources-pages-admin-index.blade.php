<template><div>
	<form class="input-group mb-3" @submit.prevent="getResults()" style="max-width:300px;">
		<input type="text" class="form-control border-0" v-model="params.search" placeholder="Buscar {{ $table->getConfig('plural') }}" />
		<div class="input-group-append"><div class="input-group-btn">
			<button type="submit" class="btn bg-white"><i class="fas fa-search"></i></button>
		</div></div>
	</form>
	
	<ui-table v-bind.sync="results" @paginate="params.page=$event; getResults();">
		<template #header>
			@foreach($table->Fields as $col)
			@if (!$col->getConfig('in_datatable')) @continue @endif 
			<th><?php echo config("schema.tables.{$table->Name}.fields.{$col->Field}.label", $col->Field); ?></th>
			@endforeach 
		</template>

		<template #item="{item}">
			@foreach($table->Fields as $col)
			@if (! $col->getConfig('in_datatable')) @continue @endif 
			<td>{{ item.<?php echo $col->Field; ?> }}</td>
			@endforeach 
		</template>

		<template #actions="{item}">
			<nuxt-link :to="`/admin/{{ $table->Route }}/${item.id}`" class="btn btn-primary">
				<i class="fas fa-edit"></i>
			</nuxt-link>
			
			<a href="javascript:void(0);" class="btn btn-danger" @click="deleteItem(item)">
				<i class="fas fa-times"></i>
			</a>
		</template>
	</ui-table>

	<ui-actions>
		<nuxt-link to="/admin/{{ $table->Route }}/0" class="btn btn-primary">Novo</nuxt-link>
	</ui-actions>
</div></template>

<script>
export default {
	layout: 'admin',
	middleware: 'auth',

	head() {
		return {
			title: "Buscar {{ $table->getConfig('plural') }}",
		};
	},

	data() {
		return {
			params: {
				search: '',
				page: 1,
				perpage: 10,
				orderby: 'id',
				order: 'desc',
			},
			results: {
				loading: false,
				data: [],
			},
		};
	},

	methods: {
		getResults() {
			this.results.loading = true;
			this.$axios('/api/{{ $table->Route }}/search', {params:this.params}).then(resp => {
				this.results = resp.data;
				this.results.loading = false;
			});
		},

		deleteItem(item) {
			this.$confirm({title:'Deseja deletar {{ $table->Singular }}?'}).then(resp => {
				this.$axios.post(`/user/delete/${item.id}`).then(resp => {
					this.$swal('{{ $table->Singular }} deletado', '', 'success');
				});
			});
		},
	},
	
	mounted() {
		this.getResults();
	},
}
</script>