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
		mergeSetting(state, data) {
			for(let i in data) {
				state[i] = data[i];
			}
		},
	},

	actions: {
		search({state, commit}) {
			return new Promise((resolve, reject) => {
				commit('mergeSetting', {loading: true});
				this.$axios.get(`/api/setting/search/`, {params:state.search}).then(resp => {
					resolve(resp);
					commit('mergeSetting', {loading: false, results: resp.data});
				}).catch(reject);
			});
		},

		find({state, commit}, id) {
			commit('mergeSetting', {edit: {}});
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergeSetting', {loading: true, edit: {}});
				this.$axios.get(`/api/setting/find/${id}`).then(resp => {
					resolve(resp);
					commit('mergeSetting', {loading: false, edit: resp.data});
				}).catch(reject);
			});
		},

		save({state, commit}, data) {
			return new Promise((resolve, reject) => {
				commit('mergeSetting', {saving: true});
				this.$axios.post(`/api/setting/save/`, data).then(resp => {
					resolve(resp);
					commit('mergeSetting', {saving: false});
				}).catch(reject);
			});
		},

		delete({state, commit}, id) {
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergeSetting', {deleting: true});
				this.$axios.post(`/api/setting/delete/${id}`).then(resp => {
					resolve(resp);
					commit('mergeSetting', {deleting: false});
				}).catch(reject);
			});
		},
	},
};