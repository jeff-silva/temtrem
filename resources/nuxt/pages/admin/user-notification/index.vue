<template><div>
	<form class="input-group mb-3" @submit.prevent="getResults()" style="max-width:300px;">
		<input type="text" class="form-control border-0" v-model="params.search" placeholder="Buscar User_notifications" />
		<div class="input-group-append"><div class="input-group-btn">
			<button type="submit" class="btn bg-white"><i class="fas fa-search"></i></button>
		</div></div>
	</form>
	
	<ui-table v-bind.sync="results" @paginate="params.page=$event; getResults();">
		<template #header>
						 
			<th>ID</th>
						 
			<th>User_id</th>
						 
			<th>Title</th>
						 
			<th>Body</th>
						 
			<th>Image</th>
						 
			<th>Url</th>
						 
			<th>Seen</th>
						 			  
		</template>

		<template #item="{item}">
						 
			<td>{{ item.id }}</td>
						 
			<td>{{ item.user_id }}</td>
						 
			<td>{{ item.title }}</td>
						 
			<td>{{ item.body }}</td>
						 
			<td>{{ item.image }}</td>
						 
			<td>{{ item.url }}</td>
						 
			<td>{{ item.seen }}</td>
						 			  
		</template>

		<template #actions="{item}">
			<nuxt-link :to="`/admin/user-notification/${item.id}`" class="btn btn-primary">
				<i class="fas fa-edit"></i>
			</nuxt-link>
			
			<a href="javascript:void(0);" class="btn btn-danger" @click="deleteItem(item)">
				<i class="fas fa-times"></i>
			</a>
		</template>
	</ui-table>

	<ui-actions>
		<nuxt-link to="/admin/user-notification/0" class="btn btn-primary">Novo</nuxt-link>
	</ui-actions>
</div></template>

<script>
export default {
	layout: 'admin',
	middleware: 'auth',

	head() {
		return {
			title: "Buscar User_notifications",
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
			this.$axios('/api/user-notification/search', {params:this.params}).then(resp => {
				this.results = resp.data;
				this.results.loading = false;
			});
		},

		deleteItem(item) {
			this.$confirm({title:'Deseja deletar user_notification?'}).then(resp => {
				this.$axios.post(`/user/delete/${item.id}`).then(resp => {
					this.$swal('user_notification deletado', '', 'success');
				});
			});
		},
	},
	
	mounted() {
		this.getResults();
	},
}
</script>