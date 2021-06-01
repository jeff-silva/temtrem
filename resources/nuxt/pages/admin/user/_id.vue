<template><div>
	<ui-form method="post" action="/api/user/save" v-model="model"
		#default="{error, success, loading}" v-loading="modelLoading"
		@success="handleSuccess($event)">
		<div class="row">
			<div class="col-12 col-lg-4">
				<ui-user-card v-model="model"></ui-user-card>
			</div>

			<div class="col-12 col-lg-8 bg-white shadow-sm">
																 
				<ui-field label="Nome" :error="error.name">
					<ui-text v-model="model.name" v-bind='{"class":"form-control"}'></ui-text> 
				</ui-field>
												 
				<ui-field label="E-mail" :error="error.email">
					<ui-text v-model="model.email" v-bind='{"class":"form-control"}'></ui-text> 
				</ui-field>
												 
				<ui-field label="Senha" :error="error.password">
					<ui-password v-model="model.password" v-bind='[]'></ui-password> 
				</ui-field>
												 
				<ui-field label="Tipo" :error="error.type">
					<ui-user-type v-model="model.type" v-bind='[]'></ui-user-type> 
				</ui-field>
																																																 
			</div>
		</div>
		
		<ui-actions>
			<nuxt-link class="btn" to="/admin/user">
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
			title: "Editar Usuário",
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
			this.$axios.get(`/api/user/find/${this.$route.params.id}`).then(resp => {
				this.model = resp.data;
				this.modelLoading = false;
			});
		},

		handleSuccess(user) {
			this.$swal("Usuário salvo", '', 'success');
			this.$router.push(`/admin/user/${user.id}`);
		},
	},
	
	mounted() {
		this.getModel();
	},
}
</script>