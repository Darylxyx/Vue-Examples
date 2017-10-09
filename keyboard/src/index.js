import './base.css';
import './main.css';
import Vue from 'vue';

import App from './component/App.vue';

new Vue({
	el: '#app',
	render: h => h(App)
});