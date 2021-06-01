<template><div>
	<form class="input-group mb-3" @submit.prevent="getResults()" style="max-width:300px;">
		<input type="text" class="form-control border-0" v-model="params.search" placeholder="Buscar Negócios" />
		<div class="input-group-append"><div class="input-group-btn">
			<button type="submit" class="btn bg-white"><i class="fas fa-search"></i></button>
		</div></div>
	</form>
	
	<ui-table v-bind.sync="results" @paginate="params.page=$event; getResults();">
		<template #header>
						 
			<th>ID</th>
						 
			<th>User_id</th>
						 			 
			<th>Name</th>
						 
			<th>Type</th>
						 			 			 			 			 			 			 			 			 			 			 			 			 			 			 			 			 			 			  
		</template>

		<template #item="{item}">
						 
			<td>{{ item.id }}</td>
						 
			<td>{{ item.user_id }}</td>
						 			 
			<td>{{ item.name }}</td>
						 
			<td>{{ item.type }}</td>
						 			 			 			 			 			 			 			 			 			 			 			 			 			 			 			 			 			 			  
		</template>

		<template #actions="{item}">
			<nuxt-link :to="`/admin/temtrem-business/${item.id}`" class="btn btn-primary">
				<i class="fas fa-edit"></i>
			</nuxt-link>
			
			<a href="javascript:void(0);" class="btn btn-danger" @click="deleteItem(item)">
				<i class="fas fa-times"></i>
			</a>
		</template>
	</ui-table>

	<ui-actions>
		<nuxt-link to="/admin/temtrem-business/0" class="btn btn-primary">Novo</nuxt-link>
	</ui-actions>
</div></template>

<script>
export default {
	layout: 'admin',
	middleware: 'auth',

	head() {
		return {
			title: "Buscar Negócios",
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
			this.$axios('/api/temtrem-business/search', {params:this.params}).then(resp => {
				this.results = resp.data;
				this.results.loading = false;
			});
		},

		deleteItem(item) {
			this.$confirm({title:'Deseja deletar temtrem_business?'}).then(resp => {
				this.$axios.post(`/user/delete/${item.id}`).then(resp => {
					this.$swal('temtrem_business deletado', '', 'success');
				});
			});
		},
	},
	
	mounted() {
		this.getResults();
	},
}
</script>