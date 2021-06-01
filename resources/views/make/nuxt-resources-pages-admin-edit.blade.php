<template><div>
	<ui-form method="post" action="/api/{{ $table->Route }}/save" v-model="model"
		#default="{error, success, loading}" v-loading="modelLoading"
		@success="handleSuccess($event)">
		<div class="row">
			<div class="col-12 col-lg-4">
				<ui-<?php echo $table->Route; ?>-card v-model="model"></ui-<?php echo $table->Route; ?>-card>
			</div>

			<div class="col-12 col-lg-8 bg-white shadow-sm">
				@foreach($table->Fields as $col)
				@if ($col->getConfig('in_form')) 
				<ui-field label="{{ $col->getConfig('label') }}" :error="error.{{ $col->Field }}">
					<?php

					$tagname = $col->getConfig('input_type');
					$bind = json_encode($col->getConfig('input_bind'));
					$options = $col->getConfig('input_options');
					
					echo "<{$tagname} v-model=\"model.{$col->Field}\" v-bind='{$bind}'>";
					if ($tagname=='ui-select') {
						foreach($options as $value=>$label) {
							echo "\n\t\t\t\t\t\t<ui-select-option value=\"{$value}\">{$label}</ui-select-option>";
						}
						echo "\n\t\t\t\t\t";
					}
					echo "</{$tagname}>";

					?> 
				</ui-field>
				@endif
				@endforeach 
			</div>
		</div>
		
		<ui-actions>
			<nuxt-link class="btn" to="/admin/{{ $table->Route }}">
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
			title: "Editar {{ $table->getConfig('singular') }}",
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
			this.$axios.get(`/api/{{ $table->Route }}/find/${this.$route.params.id}`).then(resp => {
				this.model = resp.data;
				this.modelLoading = false;
			});
		},

		handleSuccess(user) {
			this.$swal("{{ $table->getConfig('singular') }} salvo", '', 'success');
			this.$router.push(`/admin/{{ $table->Route }}/${user.<?php echo $table->Pk; ?>}`);
		},
	},
	
	mounted() {
		this.getModel();
	},
}
</script>