<template><div>
	<form class="input-group mb-3" @submit.prevent="getResults()" style="max-width:300px;">
		<input type="text" class="form-control border-0" v-model="params.search" placeholder="Buscar Temtrem_businesses_posts" />
		<div class="input-group-append"><div class="input-group-btn">
			<button type="submit" class="btn bg-white"><i class="fas fa-search"></i></button>
		</div></div>
	</form>
	
	<ui-table v-bind.sync="results" @paginate="params.page=$event; getResults();">
		<template #header>
						 
			<th>ID</th>
						 
			<th>Business_id</th>
						 
			<th>Title</th>
						 
			<th>Content</th>
						 			 			  
		</template>

		<template #item="{item}">
						 
			<td>{{ item.id }}</td>
						 
			<td>{{ item.business_id }}</td>
						 
			<td>{{ item.title }}</td>
						 
			<td>{{ item.content }}</td>
						 			 			  
		</template>

		<template #actions="{item}">
			<nuxt-link :to="`/admin/temtrem-businesses-post/${item.id}`" class="btn btn-primary">
				<i class="fas fa-edit"></i>
			</nuxt-link>
			
			<a href="javascript:void(0);" class="btn btn-danger" @click="deleteItem(item)">
				<i class="fas fa-times"></i>
			</a>
		</template>
	</ui-table>

	<ui-actions>
		<nuxt-link to="/admin/temtrem-businesses-post/0" class="btn btn-primary">Novo</nuxt-link>
	</ui-actions>
</div></template>

<script>
export default {
	layout: 'admin',
	middleware: 'auth',

	head() {
		return {
			title: "Buscar Temtrem_businesses_posts",
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
			this.$axios('/api/temtrem-businesses-post/search', {params:this.params}).then(resp => {
				this.results = resp.data;
				this.results.loading = false;
			});
		},

		deleteItem(item) {
			this.$confirm({title:'Deseja deletar temtrem_businesses_post?'}).then(resp => {
				this.$axios.post(`/user/delete/${item.id}`).then(resp => {
					this.$swal('temtrem_businesses_post deletado', '', 'success');
				});
			});
		},
	},
	
	mounted() {
		this.getResults();
	},
}
</script>