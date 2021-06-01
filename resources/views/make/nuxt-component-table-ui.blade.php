<template>
	<el-select v-model="props.value" filterable remote reserve-keyword
		:multiple="props.multiple"
		:placeholder="props.placeholder"
		:loading="loading"
		:remote-method="search"
		@change="emitValue()" @input="emitValue()">
		<el-option value="" v-if="!props.multiple">Nenhum</el-option>
		<el-option v-for="i in results.data" :key="i[fieldValue]" :value="i[fieldValue]" :label="i[fieldLabel]">
			@{{ i.name }}
		</el-option>
	</el-select>
</template>

<script>
export default {
	props: {
		value: [String, Number, Array, Object, Boolean],
		multiple: {default:false},
		placeholder: {default:'Selecione'},
		fieldValue: {default:'{{ $table->Pk }}'},
		fieldLabel: {default:'{{ $table->FieldLabel }}'},
	},
	
	watch: {
		$props: {deep:true, handler(value) {
			this.props = Object.assign({}, value);
		}},
	},
	
	data() {
		return {
			loading: false,
			results: {data:[]},
			props: Object.assign({}, this.$props),
		};
	},
	
	methods: {
		emitValue() { this.$emit('input', this.props.value); },
		
		search(term=false) {
			this.loading = true;
			// let params = {search:term, perpage:0};
			// this.$axios.get('/api/<?php echo $table->Route; ?>/search', {params}).then(resp => {
			// 	this.loading = false;
			// 	this.results = resp.data;
			// });

			let query = `query {
				<?php echo \Str::of($table->Model->Name)->plural(); ?>(first:50) {
					data {
						{{ $table->Pk }}
						{{ $table->FieldLabel }}
					}
				}
			}`;

			this.$graphql(query).then(resp => {
				this.loading = false;
				this.results.data = resp.data.data.<?php echo \Str::of($table->Model->Name)->plural(); ?>.data;
			});
		},
	},
	
	mounted() {
		this.search();
	},
};
</script>