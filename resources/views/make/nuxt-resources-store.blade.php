export default {
	state() {
		return {
			loading: false,
			saving: false,
			deleting: false,
			edit: {id:''},
			error: {},
			search: {
				search: '',
				page: 1,
				perpage: 10,
				orderby: 'id',
				order: 'desc',
			},
		};
	},

	mutations: {
		merge{{ $table->Model->Name }}(state, data) {
			for(let i in data) {
				state[i] = data[i];
			}
		},
	},

	actions: {
		search({state, commit}) {
			return new Promise((resolve, reject) => {
				commit('merge{{ $table->Model->Name }}', {loading: true});
				this.$axios.get(`/api/{{ $table->Route }}/search/`, {params:state.search}).then(resp => {
					resolve(resp);
					commit('merge{{ $table->Model->Name }}', {loading: false, results: resp.data});
				}).catch(reject);
			});
		},

		find({state, commit}, id) {
			commit('merge{{ $table->Model->Name }}', {edit: {}});
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('merge{{ $table->Model->Name }}', {loading: true, edit: {}});
				this.$axios.get(`/api/{{ $table->Route }}/find/${id}`).then(resp => {
					resolve(resp);
					commit('merge{{ $table->Model->Name }}', {loading: false, edit: resp.data});
				}).catch(reject);
			});
		},

		save({state, commit}, data) {
			return new Promise((resolve, reject) => {
				commit('merge{{ $table->Model->Name }}', {saving: true});
				this.$axios.post(`/api/{{ $table->Route }}/save/`, data).then(resp => {
					resolve(resp);
					commit('merge{{ $table->Model->Name }}', {saving: false});
				}).catch(reject);
			});
		},

		delete({state, commit}, id) {
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('merge{{ $table->Model->Name }}', {deleting: true});
				this.$axios.post(`/api/{{ $table->Route }}/delete/${id}`).then(resp => {
					resolve(resp);
					commit('merge{{ $table->Model->Name }}', {deleting: false});
				}).catch(reject);
			});
		},
	},
};