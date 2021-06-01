<template><div>
	<ui-form method="post" action="/api/user-notification/save" v-model="model"
		#default="{error, success, loading}" v-loading="modelLoading"
		@success="handleSuccess($event)">
		<div class="row">
			<div class="col-12 col-lg-4">
				<ui-user-notification-card v-model="model"></ui-user-notification-card>
			</div>

			<div class="col-12 col-lg-8 bg-white shadow-sm">
																 
				<ui-field label="User_id" :error="error.user_id">
					<ui-user v-model="model.user_id" v-bind='[]'></ui-user> 
				</ui-field>
												 
				<ui-field label="Title" :error="error.title">
					<ui-text v-model="model.title" v-bind='{"class":"form-control"}'></ui-text> 
				</ui-field>
												 
				<ui-field label="Body" :error="error.body">
					<ui-text v-model="model.body" v-bind='{"multiline":"true"}'></ui-text> 
				</ui-field>
												 
				<ui-field label="Image" :error="error.image">
					<ui-text v-model="model.image" v-bind='{"multiline":"true"}'></ui-text> 
				</ui-field>
												 
				<ui-field label="Url" :error="error.url">
					<ui-text v-model="model.url" v-bind='{"multiline":"true"}'></ui-text> 
				</ui-field>
												 
				<ui-field label="Seen" :error="error.seen">
					<ui-text v-model="model.seen" v-bind='{"class":"form-control"}'></ui-text> 
				</ui-field>
																								 
			</div>
		</div>
		
		<ui-actions>
			<nuxt-link class="btn" to="/admin/user-notification">
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
			title: "Editar User_notification",
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
			this.$axios.get(`/api/user-notification/find/${this.$route.params.id}`).then(resp => {
				this.model = resp.data;
				this.modelLoading = false;
			});
		},

		handleSuccess(user) {
			this.$swal("User_notification salvo", '', 'success');
			this.$router.push(`/admin/user-notification/${user.id}`);
		},
	},
	
	mounted() {
		this.getModel();
	},
}
</script>