import Vue from 'vue/dist/vue.js';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		addCount(state) {
			state.count++;
		}
	}
});

store.commit('addCount');

// console.log(store.state.count);

const Mutations = {
	template: `<h1>Mutations count is {{count}}</h1>`,
	computed: {
		count() {
			return store.state.count;
		}
	}
};

export default Mutations;