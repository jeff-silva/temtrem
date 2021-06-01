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
		mergeUserNotification(state, data) {
			for(let i in data) {
				state[i] = data[i];
			}
		},
	},

	actions: {
		search({state, commit}) {
			return new Promise((resolve, reject) => {
				commit('mergeUserNotification', {loading: true});
				this.$axios.get(`/api/user-notification/search/`, {params:state.search}).then(resp => {
					resolve(resp);
					commit('mergeUserNotification', {loading: false, results: resp.data});
				}).catch(reject);
			});
		},

		find({state, commit}, id) {
			commit('mergeUserNotification', {edit: {}});
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergeUserNotification', {loading: true, edit: {}});
				this.$axios.get(`/api/user-notification/find/${id}`).then(resp => {
					resolve(resp);
					commit('mergeUserNotification', {loading: false, edit: resp.data});
				}).catch(reject);
			});
		},

		save({state, commit}, data) {
			return new Promise((resolve, reject) => {
				commit('mergeUserNotification', {saving: true});
				this.$axios.post(`/api/user-notification/save/`, data).then(resp => {
					resolve(resp);
					commit('mergeUserNotification', {saving: false});
				}).catch(reject);
			});
		},

		delete({state, commit}, id) {
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergeUserNotification', {deleting: true});
				this.$axios.post(`/api/user-notification/delete/${id}`).then(resp => {
					resolve(resp);
					commit('mergeUserNotification', {deleting: false});
				}).catch(reject);
			});
		},
	},
};