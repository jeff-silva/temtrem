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
		mergeTemtremBusinessesItem(state, data) {
			for(let i in data) {
				state[i] = data[i];
			}
		},
	},

	actions: {
		search({state, commit}) {
			return new Promise((resolve, reject) => {
				commit('mergeTemtremBusinessesItem', {loading: true});
				this.$axios.get(`/api/temtrem-businesses-item/search/`, {params:state.search}).then(resp => {
					resolve(resp);
					commit('mergeTemtremBusinessesItem', {loading: false, results: resp.data});
				}).catch(reject);
			});
		},

		find({state, commit}, id) {
			commit('mergeTemtremBusinessesItem', {edit: {}});
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergeTemtremBusinessesItem', {loading: true, edit: {}});
				this.$axios.get(`/api/temtrem-businesses-item/find/${id}`).then(resp => {
					resolve(resp);
					commit('mergeTemtremBusinessesItem', {loading: false, edit: resp.data});
				}).catch(reject);
			});
		},

		save({state, commit}, data) {
			return new Promise((resolve, reject) => {
				commit('mergeTemtremBusinessesItem', {saving: true});
				this.$axios.post(`/api/temtrem-businesses-item/save/`, data).then(resp => {
					resolve(resp);
					commit('mergeTemtremBusinessesItem', {saving: false});
				}).catch(reject);
			});
		},

		delete({state, commit}, id) {
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergeTemtremBusinessesItem', {deleting: true});
				this.$axios.post(`/api/temtrem-businesses-item/delete/${id}`).then(resp => {
					resolve(resp);
					commit('mergeTemtremBusinessesItem', {deleting: false});
				}).catch(reject);
			});
		},
	},
};