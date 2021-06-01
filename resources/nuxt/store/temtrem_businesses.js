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
		mergeTemtremBusiness(state, data) {
			for(let i in data) {
				state[i] = data[i];
			}
		},
	},

	actions: {
		search({state, commit}) {
			return new Promise((resolve, reject) => {
				commit('mergeTemtremBusiness', {loading: true});
				this.$axios.get(`/api/temtrem-business/search/`, {params:state.search}).then(resp => {
					resolve(resp);
					commit('mergeTemtremBusiness', {loading: false, results: resp.data});
				}).catch(reject);
			});
		},

		find({state, commit}, id) {
			commit('mergeTemtremBusiness', {edit: {}});
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergeTemtremBusiness', {loading: true, edit: {}});
				this.$axios.get(`/api/temtrem-business/find/${id}`).then(resp => {
					resolve(resp);
					commit('mergeTemtremBusiness', {loading: false, edit: resp.data});
				}).catch(reject);
			});
		},

		save({state, commit}, data) {
			return new Promise((resolve, reject) => {
				commit('mergeTemtremBusiness', {saving: true});
				this.$axios.post(`/api/temtrem-business/save/`, data).then(resp => {
					resolve(resp);
					commit('mergeTemtremBusiness', {saving: false});
				}).catch(reject);
			});
		},

		delete({state, commit}, id) {
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergeTemtremBusiness', {deleting: true});
				this.$axios.post(`/api/temtrem-business/delete/${id}`).then(resp => {
					resolve(resp);
					commit('mergeTemtremBusiness', {deleting: false});
				}).catch(reject);
			});
		},
	},
};