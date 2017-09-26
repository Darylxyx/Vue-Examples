import './base.css';
import './main.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import App from './component/App.vue';

new Vue({
	el: '#app',
	render: h => h(App)
});
