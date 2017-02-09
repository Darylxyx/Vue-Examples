import Vue from 'vue/dist/vue.js';
let { mapState, mapActions } = Vuex;

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

// console.log('actions:',store.state.count);

const Actions = {
	store,
	template: `<h1 @click="addCount">Actions {{count}}</h1>`,
	computed: {
		...mapState({
			count: 'count'
		})
	},
	methods: {
		...mapActions([
			'addCount'
		])
	}
};

export default Actions;