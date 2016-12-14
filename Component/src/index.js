import './main.css';
import Vue from 'vue/dist/vue.js';

import App from './component/A.vue';

new Vue({
	el: '#demo',
	data: {
		message: 'Hello world'
	},
	// render: h => h(App)
	render(createElment) {
		return createElment(App);
	}
});