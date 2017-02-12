import Vue from 'vue/dist/vue.js';
let { mapState, mapActions } = Vuex;

const store = new Vuex.Store({
	state: {
		count: 0,
		asyncFlag: false
	},
	mutations: {
		addCount(state) {
			state.count++;
		},
		tunrFlag(state) {
			state.asyncFlag = true;
		}
	},
	actions: {
		addCount(store) {
			store.commit('addCount');
		},
		asyncActionA() {
			return new Promise((resolve, rejecte) => {
				setTimeout(() => {
					store.commit('tunrFlag');
					resolve();
				}, 2000);
			})
		},
		asyncActionB({ dispatch }, params) {
			return dispatch('asyncActionA').then(() => {
				console.log('Flag turn completed at: ', params.date);
			});
		}
	}
});

store.dispatch('addCount');

store.dispatch('asyncActionB', {
	date: (new Date()).getTime()
});

const Actions = {
	store,
	template: `<h1 @click="addCount">Actions {{count}}, AsyncFlag: {{asyncFlag}}</h1>`,
	computed: {
		...mapState({
			count: 'count',
			asyncFlag: 'asyncFlag'
		})
	},
	methods: {
		...mapActions([
			'addCount'
		])
	}
};

export default Actions;