<template><div>
	<ui-form method="post" action="/api/temtrem-businesses-post/save" v-model="model"
		#default="{error, success, loading}" v-loading="modelLoading"
		@success="handleSuccess($event)">
		<div class="row">
			<div class="col-12 col-lg-4">
				<ui-temtrem-businesses-post-card v-model="model"></ui-temtrem-businesses-post-card>
			</div>

			<div class="col-12 col-lg-8 bg-white shadow-sm">
																 
				<ui-field label="Business_id" :error="error.business_id">
					<ui-temtrem-business v-model="model.business_id" v-bind='[]'></ui-temtrem-business> 
				</ui-field>
												 
				<ui-field label="Title" :error="error.title">
					<ui-text v-model="model.title" v-bind='{"class":"form-control"}'></ui-text> 
				</ui-field>
												 
				<ui-field label="Content" :error="error.content">
					<ui-text v-model="model.content" v-bind='{"multiline":"true"}'></ui-text> 
				</ui-field>
																																 
			</div>
		</div>
		
		<ui-actions>
			<nuxt-link class="btn" to="/admin/temtrem-businesses-post">
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
			title: "Editar Temtrem_businesses_post",
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
			this.$axios.get(`/api/temtrem-businesses-post/find/${this.$route.params.id}`).then(resp => {
				this.model = resp.data;
				this.modelLoading = false;
			});
		},

		handleSuccess(user) {
			this.$swal("Temtrem_businesses_post salvo", '', 'success');
			this.$router.push(`/admin/temtrem-businesses-post/${user.id}`);
		},
	},
	
	mounted() {
		this.getModel();
	},
}
</script>