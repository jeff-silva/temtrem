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
		mergeTemtremBusinessesPost(state, data) {
			for(let i in data) {
				state[i] = data[i];
			}
		},
	},

	actions: {
		search({state, commit}) {
			return new Promise((resolve, reject) => {
				commit('mergeTemtremBusinessesPost', {loading: true});
				this.$axios.get(`/api/temtrem-businesses-post/search/`, {params:state.search}).then(resp => {
					resolve(resp);
					commit('mergeTemtremBusinessesPost', {loading: false, results: resp.data});
				}).catch(reject);
			});
		},

		find({state, commit}, id) {
			commit('mergeTemtremBusinessesPost', {edit: {}});
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergeTemtremBusinessesPost', {loading: true, edit: {}});
				this.$axios.get(`/api/temtrem-businesses-post/find/${id}`).then(resp => {
					resolve(resp);
					commit('mergeTemtremBusinessesPost', {loading: false, edit: resp.data});
				}).catch(reject);
			});
		},

		save({state, commit}, data) {
			return new Promise((resolve, reject) => {
				commit('mergeTemtremBusinessesPost', {saving: true});
				this.$axios.post(`/api/temtrem-businesses-post/save/`, data).then(resp => {
					resolve(resp);
					commit('mergeTemtremBusinessesPost', {saving: false});
				}).catch(reject);
			});
		},

		delete({state, commit}, id) {
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergeTemtremBusinessesPost', {deleting: true});
				this.$axios.post(`/api/temtrem-businesses-post/delete/${id}`).then(resp => {
					resolve(resp);
					commit('mergeTemtremBusinessesPost', {deleting: false});
				}).catch(reject);
			});
		},
	},
};