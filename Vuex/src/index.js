import './main.css';
import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex';

import Child from './component/child.js';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		increment(state) {
			state.count++;
		}
	}
});

store.dispatch('increment');
store.dispatch('increment');

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