import Vue from 'vue/dist/vue.js';

const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		addCount(state) {
			state.count++;
		}
	},
	actions: {
		addCount(store) {
			store.commit('addCount');
		}
	}
});

store.dispatch('addCount');

console.log('actions:',store.state.count);

const Actions = {
	store,
	template: `<h1>Actions</h1>`
};

export default Actions;