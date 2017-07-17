import './base.css';
import './main.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
// import Vuex from 'vuex';

import './global';

import App from './App.vue';
import First from './component/First.vue';
import FirstA from './component/FirstA.vue';
import FirstB from './component/FirstB.vue';
import FirstC from './component/FirstC.vue';
import Second from './component/Second.vue';
import SecondA from './component/SecondA.vue';
import SecondB from './component/SecondB.vue';
import SecondC from './component/SecondC.vue';
import Third from './component/Third.vue';
import ThirdA from './component/ThirdA.vue';
import ThirdB from './component/ThirdB.vue';
import Commondity from './component/commodity.vue';
import Detail from './component/detail.vue';

Vue.use(VueRouter);

let router = new VueRouter({
	// mode: 'history',
	routes: [
		{ path: '/', redirect: '/First' },
		{ path: '/First', component: First },
		{ path: '/First/FirstA', component: FirstA },
		{ path: '/First/FirstB', component: FirstB },
		{ path: '/First/FirstC', component: FirstC },
		{ path: '/Second', component: Second },
		{ path: '/Second/SecondA', component: SecondA },
		{ path: '/Second/SecondB', component: SecondB },
		{ path: '/Second/SecondC', component: SecondC },
		{ path: '/Third', component: Third },
		{ path: '/Third/ThirdA', component: ThirdA },
		{ path: '/Third/ThirdB', component: ThirdB },
		{ path: '/Third/goods', component: Commondity },
		{ path: '/Third/goods/:id', component: Detail }
	]
});

new Vue({
	el: '#container',
	render: h => h(App),
	router
});
