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
		mergeMigration(state, data) {
			for(let i in data) {
				state[i] = data[i];
			}
		},
	},

	actions: {
		search({state, commit}) {
			return new Promise((resolve, reject) => {
				commit('mergeMigration', {loading: true});
				this.$axios.get(`/api/migration/search/`, {params:state.search}).then(resp => {
					resolve(resp);
					commit('mergeMigration', {loading: false, results: resp.data});
				}).catch(reject);
			});
		},

		find({state, commit}, id) {
			commit('mergeMigration', {edit: {}});
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergeMigration', {loading: true, edit: {}});
				this.$axios.get(`/api/migration/find/${id}`).then(resp => {
					resolve(resp);
					commit('mergeMigration', {loading: false, edit: resp.data});
				}).catch(reject);
			});
		},

		save({state, commit}, data) {
			return new Promise((resolve, reject) => {
				commit('mergeMigration', {saving: true});
				this.$axios.post(`/api/migration/save/`, data).then(resp => {
					resolve(resp);
					commit('mergeMigration', {saving: false});
				}).catch(reject);
			});
		},

		delete({state, commit}, id) {
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergeMigration', {deleting: true});
				this.$axios.post(`/api/migration/delete/${id}`).then(resp => {
					resolve(resp);
					commit('mergeMigration', {deleting: false});
				}).catch(reject);
			});
		},
	},
};