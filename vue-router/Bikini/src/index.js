import './base.css';
import './main.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
// import Vuex from 'vuex';

import './global';

import App from './App.vue';
import First from './component/First.vue';
import FirstA from './component/FirstA.vue';
import Second from './component/Second.vue';
import Third from './component/Third.vue';

console.log(FirstA);

Vue.use(VueRouter);

let router = new VueRouter({
	// mode: 'history',
	routes: [
		{ path: '/', redirect: '/First' },
		{ path: '/First', component: First },
		{ path: '/First/FirstA', component: FirstA },
		{ path: '/Second', component: Second },
		{ path: '/Third', component: Third }
	]
});

new Vue({
	el: '#container',
	render: h => h(App),
	router
});
