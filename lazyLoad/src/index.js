import './base.css';
import './main.css';
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './component/App.vue';
// import A from './component/A.vue';
// console.log(A);

// const AsynA = () => Promise.resolve(A);
// console.log(AsynA);

const AsynA = () => import('./component/A.vue');
console.log(AsynA);

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{path: '/A', component: AsynA}
	]
});

new Vue({
	el: '#app',
	render: h => h(App),
	router
});
