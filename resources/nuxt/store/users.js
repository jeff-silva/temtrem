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
		mergeUser(state, data) {
			for(let i in data) {
				state[i] = data[i];
			}
		},
	},

	actions: {
		search({state, commit}) {
			return new Promise((resolve, reject) => {
				commit('mergeUser', {loading: true});
				this.$axios.get(`/api/user/search/`, {params:state.search}).then(resp => {
					resolve(resp);
					commit('mergeUser', {loading: false, results: resp.data});
				}).catch(reject);
			});
		},

		find({state, commit}, id) {
			commit('mergeUser', {edit: {}});
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergeUser', {loading: true, edit: {}});
				this.$axios.get(`/api/user/find/${id}`).then(resp => {
					resolve(resp);
					commit('mergeUser', {loading: false, edit: resp.data});
				}).catch(reject);
			});
		},

		save({state, commit}, data) {
			return new Promise((resolve, reject) => {
				commit('mergeUser', {saving: true});
				this.$axios.post(`/api/user/save/`, data).then(resp => {
					resolve(resp);
					commit('mergeUser', {saving: false});
				}).catch(reject);
			});
		},

		delete({state, commit}, id) {
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergeUser', {deleting: true});
				this.$axios.post(`/api/user/delete/${id}`).then(resp => {
					resolve(resp);
					commit('mergeUser', {deleting: false});
				}).catch(reject);
			});
		},
	},
};