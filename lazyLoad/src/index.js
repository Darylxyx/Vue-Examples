import './base.css';
import './main.css';
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './component/App.vue';

const AsyncA = () => import('./component/A.vue');
const AsyncB = () => import('./component/B.vue');
const AsyncC = () => import('./component/C.vue');

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{path: '/A', component: AsyncA},
		{path: '/B', component: AsyncB},
		{path: '/C', component: AsyncC}
	]
});

new Vue({
	el: '#app',
	render: h => h(App),
	router
});
