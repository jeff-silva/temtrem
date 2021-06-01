<template><div>
	<ui-form method="post" action="/api/email/save" v-model="model"
		#default="{error, success, loading}" v-loading="modelLoading"
		@success="handleSuccess($event)">
		<div class="row">
			<div class="col-12 col-lg-4">
				<ui-email-card v-model="model"></ui-email-card>
			</div>

			<div class="col-12 col-lg-8 bg-white shadow-sm">
																 
				<ui-field label="Name" :error="error.name">
					<ui-text v-model="model.name" v-bind='{"class":"form-control"}'></ui-text> 
				</ui-field>
												 
				<ui-field label="Subject" :error="error.subject">
					<ui-text v-model="model.subject" v-bind='{"class":"form-control"}'></ui-text> 
				</ui-field>
												 
				<ui-field label="Body" :error="error.body">
					<ui-text v-model="model.body" v-bind='{"multiline":"true"}'></ui-text> 
				</ui-field>
												 
				<ui-field label="Params" :error="error.params">
					<ui-text v-model="model.params" v-bind='{"multiline":"true"}'></ui-text> 
				</ui-field>
																								 
			</div>
		</div>
		
		<ui-actions>
			<nuxt-link class="btn" to="/admin/email">
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
			title: "Editar Email",
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
			this.$axios.get(`/api/email/find/${this.$route.params.id}`).then(resp => {
				this.model = resp.data;
				this.modelLoading = false;
			});
		},

		handleSuccess(user) {
			this.$swal("Email salvo", '', 'success');
			this.$router.push(`/admin/email/${user.id}`);
		},
	},
	
	mounted() {
		this.getModel();
	},
}
</script>