<template><div>
	<ui-form method="post" action="/api/temtrem-businesses-item/save" v-model="model"
		#default="{error, success, loading}" v-loading="modelLoading"
		@success="handleSuccess($event)">
		<div class="row">
			<div class="col-12 col-lg-4">
				<ui-temtrem-businesses-item-card v-model="model"></ui-temtrem-businesses-item-card>
			</div>

			<div class="col-12 col-lg-8 bg-white shadow-sm">
																 
				<ui-field label="Store" :error="error.store">
					<ui-user v-model="model.store" v-bind='[]'></ui-user> 
				</ui-field>
												 
				<ui-field label="Name" :error="error.name">
					<ui-text v-model="model.name" v-bind='{"class":"form-control"}'></ui-text> 
				</ui-field>
								 
			</div>
		</div>
		
		<ui-actions>
			<nuxt-link class="btn" to="/admin/temtrem-businesses-item">
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
			title: "Editar Temtrem_businesses_item",
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
			this.$axios.get(`/api/temtrem-businesses-item/find/${this.$route.params.id}`).then(resp => {
				this.model = resp.data;
				this.modelLoading = false;
			});
		},

		handleSuccess(user) {
			this.$swal("Temtrem_businesses_item salvo", '', 'success');
			this.$router.push(`/admin/temtrem-businesses-item/${user.id}`);
		},
	},
	
	mounted() {
		this.getModel();
	},
}
</script>