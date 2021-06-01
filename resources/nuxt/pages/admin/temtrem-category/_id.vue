<template><div>
	<ui-form method="post" action="/api/temtrem-category/save" v-model="model"
		#default="{error, success, loading}" v-loading="modelLoading"
		@success="handleSuccess($event)">
		<div class="row">
			<div class="col-12 col-lg-4">
				<ui-temtrem-category-card v-model="model"></ui-temtrem-category-card>
			</div>

			<div class="col-12 col-lg-8 bg-white shadow-sm">
																 
				<ui-field label="Slug" :error="error.slug">
					<ui-text v-model="model.slug" v-bind='{"class":"form-control"}'></ui-text> 
				</ui-field>
												 
				<ui-field label="Name" :error="error.name">
					<ui-text v-model="model.name" v-bind='{"class":"form-control"}'></ui-text> 
				</ui-field>
												 
				<ui-field label="Icon" :error="error.icon">
					<ui-text v-model="model.icon" v-bind='{"class":"form-control"}'></ui-text> 
				</ui-field>
												 
				<ui-field label="Parent" :error="error.parent">
					<ui-temtrem-category v-model="model.parent" v-bind='[]'></ui-temtrem-category> 
				</ui-field>
																																 
			</div>
		</div>
		
		<ui-actions>
			<nuxt-link class="btn" to="/admin/temtrem-category">
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
			title: "Editar Temtrem_category",
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
			this.$axios.get(`/api/temtrem-category/find/${this.$route.params.id}`).then(resp => {
				this.model = resp.data;
				this.modelLoading = false;
			});
		},

		handleSuccess(user) {
			this.$swal("Temtrem_category salvo", '', 'success');
			this.$router.push(`/admin/temtrem-category/${user.id}`);
		},
	},
	
	mounted() {
		this.getModel();
	},
}
</script>