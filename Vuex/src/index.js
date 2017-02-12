import './main.css';
import Vue from 'vue/dist/vue.js';
import States from './component/state.js';
import Getters from './component/getters.js';
import Mutations from './component/mutation.js';
import Actions from './component/actions.js';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 0,
		stateA: 'A',
		stateB: 'B',
		stateC: 'C'
	},
	mutations: {
		increment(state) {
			state.count++;
		}
	}
});

store.commit('increment');
store.commit('increment');

console.log(store.state.count);

new Vue({
	el: '#demo',
	store,
	template: `<div>
				<h1>{{count}}</h1>
				<states></states>
				<getters></getters>
				<Mutations></Mutations>
				<Actions></Actions>
			  </div>`,
	components: {States, Getters, Mutations, Actions},
	computed: {
		count() {
			return store.state.count
		}
	}
});