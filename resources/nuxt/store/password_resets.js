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
		mergePasswordReset(state, data) {
			for(let i in data) {
				state[i] = data[i];
			}
		},
	},

	actions: {
		search({state, commit}) {
			return new Promise((resolve, reject) => {
				commit('mergePasswordReset', {loading: true});
				this.$axios.get(`/api/password-reset/search/`, {params:state.search}).then(resp => {
					resolve(resp);
					commit('mergePasswordReset', {loading: false, results: resp.data});
				}).catch(reject);
			});
		},

		find({state, commit}, id) {
			commit('mergePasswordReset', {edit: {}});
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergePasswordReset', {loading: true, edit: {}});
				this.$axios.get(`/api/password-reset/find/${id}`).then(resp => {
					resolve(resp);
					commit('mergePasswordReset', {loading: false, edit: resp.data});
				}).catch(reject);
			});
		},

		save({state, commit}, data) {
			return new Promise((resolve, reject) => {
				commit('mergePasswordReset', {saving: true});
				this.$axios.post(`/api/password-reset/save/`, data).then(resp => {
					resolve(resp);
					commit('mergePasswordReset', {saving: false});
				}).catch(reject);
			});
		},

		delete({state, commit}, id) {
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergePasswordReset', {deleting: true});
				this.$axios.post(`/api/password-reset/delete/${id}`).then(resp => {
					resolve(resp);
					commit('mergePasswordReset', {deleting: false});
				}).catch(reject);
			});
		},
	},
};