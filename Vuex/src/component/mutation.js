import Vue from 'vue/dist/vue.js';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		addCount(state, data) {
			state.count += data.num;
			state.count += data.text;
		}
	}
});

store.commit('addCount', {
	num: 10,
	text: '*'
});

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