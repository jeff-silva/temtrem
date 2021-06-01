<template><div>
	<ui-form method="post" action="/api/temtrem-business/save" v-model="model"
		#default="{error, success, loading}" v-loading="modelLoading"
		@success="handleSuccess($event)">
		<div class="row">
			<div class="col-12 col-lg-4">
				<ui-temtrem-business-card v-model="model"></ui-temtrem-business-card>
			</div>

			<div class="col-12 col-lg-8 bg-white shadow-sm">
																 
				<ui-field label="User_id" :error="error.user_id">
					<ui-user v-model="model.user_id" v-bind='[]'></ui-user> 
				</ui-field>
												 
				<ui-field label="Categoria" :error="error.category_id">
					<ui-temtrem-category v-model="model.category_id" v-bind='[]'></ui-temtrem-category> 
				</ui-field>
												 
				<ui-field label="Name" :error="error.name">
					<ui-text v-model="model.name" v-bind='{"class":"form-control"}'></ui-text> 
				</ui-field>
												 
				<ui-field label="Type" :error="error.type">
					<ui-temtrem-business-type v-model="model.type" v-bind='[]'></ui-temtrem-business-type> 
				</ui-field>
												 
				<ui-field label="Nomadic" :error="error.nomadic">
					<ui-text v-model="model.nomadic" v-bind='{"class":"form-control"}'></ui-text> 
				</ui-field>
																												 
				<ui-field label="Content" :error="error.content">
					<ui-text v-model="model.content" v-bind='{"multiline":"true"}'></ui-text> 
				</ui-field>
																																																																																																																																 
			</div>
		</div>
		
		<ui-actions>
			<nuxt-link class="btn" to="/admin/temtrem-business">
				<i class="fas fa-chevron-left"></i> Voltar
			</nuxt-link>
			<button type="submit" class="btn btn-primary">
				<i class="fas fa-save"></i> Salvar
			</button>
		</ui-actions>
	</ui-form>
</div></template>


<script>
export default {
	layout: 'admin',
	middleware: 'auth',

	head() {
		return {
			title: "Editar Negócio",
		};
	},

	data() {
		return {
			modelLoading: false,
			model: {},
		};
	},

	methods: {
		getModel() {
			if (! +this.$route.params.id) return;
			this.modelLoading = true;
			this.$axios.get(`/api/temtrem-business/find/${this.$route.params.id}`).then(resp => {
				this.model = resp.data;
				this.modelLoading = false;
			});
		},

		handleSuccess(user) {
			this.$swal("Negócio salvo", '', 'success');
			this.$router.push(`/admin/temtrem-business/${user.id}`);
		},
	},
	
	mounted() {
		this.getModel();
	},
}
</script>