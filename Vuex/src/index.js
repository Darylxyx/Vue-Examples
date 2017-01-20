import './main.css';
import Vue from 'vue/dist/vue.js';
import Child from './component/child.js';
// console.log(Vuex);

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
				<child></child>
			  </div>`,
	components: {Child},
	computed: {
		count() {
			return store.state.count
		}
	}
});