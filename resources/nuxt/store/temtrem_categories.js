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
		mergeTemtremCategory(state, data) {
			for(let i in data) {
				state[i] = data[i];
			}
		},
	},

	actions: {
		search({state, commit}) {
			return new Promise((resolve, reject) => {
				commit('mergeTemtremCategory', {loading: true});
				this.$axios.get(`/api/temtrem-category/search/`, {params:state.search}).then(resp => {
					resolve(resp);
					commit('mergeTemtremCategory', {loading: false, results: resp.data});
				}).catch(reject);
			});
		},

		find({state, commit}, id) {
			commit('mergeTemtremCategory', {edit: {}});
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergeTemtremCategory', {loading: true, edit: {}});
				this.$axios.get(`/api/temtrem-category/find/${id}`).then(resp => {
					resolve(resp);
					commit('mergeTemtremCategory', {loading: false, edit: resp.data});
				}).catch(reject);
			});
		},

		save({state, commit}, data) {
			return new Promise((resolve, reject) => {
				commit('mergeTemtremCategory', {saving: true});
				this.$axios.post(`/api/temtrem-category/save/`, data).then(resp => {
					resolve(resp);
					commit('mergeTemtremCategory', {saving: false});
				}).catch(reject);
			});
		},

		delete({state, commit}, id) {
			if (!id||id=='0') return;
			return new Promise((resolve, reject) => {
				commit('mergeTemtremCategory', {deleting: true});
				this.$axios.post(`/api/temtrem-category/delete/${id}`).then(resp => {
					resolve(resp);
					commit('mergeTemtremCategory', {deleting: false});
				}).catch(reject);
			});
		},
	},
};