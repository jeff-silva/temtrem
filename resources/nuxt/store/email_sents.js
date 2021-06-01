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
		mergeEmailSent(state, data) {
			for(let i in data) {
				state[i] = data[i];
			}
		},
	},

	actions: {
		search({state, commit}) {
			return new Promise((resolve, reject) => {
				commit('mergeEmailSent', {loading: true});
				this.$axios.get(`/api/email-sent/search/`, {params:state.search}).then(resp => {
					resolve(resp);
					commit('mergeEmailSent', {loading: false, results: resp.data});
				}).catch(reject);
			});
		},

		find({state, commit}, id) {
			commit('mergeEmailSent', {edit: {}});
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergeEmailSent', {loading: true, edit: {}});
				this.$axios.get(`/api/email-sent/find/${id}`).then(resp => {
					resolve(resp);
					commit('mergeEmailSent', {loading: false, edit: resp.data});
				}).catch(reject);
			});
		},

		save({state, commit}, data) {
			return new Promise((resolve, reject) => {
				commit('mergeEmailSent', {saving: true});
				this.$axios.post(`/api/email-sent/save/`, data).then(resp => {
					resolve(resp);
					commit('mergeEmailSent', {saving: false});
				}).catch(reject);
			});
		},

		delete({state, commit}, id) {
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergeEmailSent', {deleting: true});
				this.$axios.post(`/api/email-sent/delete/${id}`).then(resp => {
					resolve(resp);
					commit('mergeEmailSent', {deleting: false});
				}).catch(reject);
			});
		},
	},
};