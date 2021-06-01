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
		mergeEmail(state, data) {
			for(let i in data) {
				state[i] = data[i];
			}
		},
	},

	actions: {
		search({state, commit}) {
			return new Promise((resolve, reject) => {
				commit('mergeEmail', {loading: true});
				this.$axios.get(`/api/email/search/`, {params:state.search}).then(resp => {
					resolve(resp);
					commit('mergeEmail', {loading: false, results: resp.data});
				}).catch(reject);
			});
		},

		find({state, commit}, id) {
			commit('mergeEmail', {edit: {}});
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergeEmail', {loading: true, edit: {}});
				this.$axios.get(`/api/email/find/${id}`).then(resp => {
					resolve(resp);
					commit('mergeEmail', {loading: false, edit: resp.data});
				}).catch(reject);
			});
		},

		save({state, commit}, data) {
			return new Promise((resolve, reject) => {
				commit('mergeEmail', {saving: true});
				this.$axios.post(`/api/email/save/`, data).then(resp => {
					resolve(resp);
					commit('mergeEmail', {saving: false});
				}).catch(reject);
			});
		},

		delete({state, commit}, id) {
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergeEmail', {deleting: true});
				this.$axios.post(`/api/email/delete/${id}`).then(resp => {
					resolve(resp);
					commit('mergeEmail', {deleting: false});
				}).catch(reject);
			});
		},
	},
};