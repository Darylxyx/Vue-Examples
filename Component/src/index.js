import './main.css';
import Vue from 'vue/dist/vue.js';

// import app from './component/A.vue';
import './component/B.js';
import cc from './component/C.js';
import './component/D.js';

new Vue({
	el: '#demo',
	data: {
		message: 'Hello world'
	},
	template: `<div @click="handleClick" class="container">
				<bb :prop="message"></bb>
				<cc :propsEvent="propsEvent"></cc>
				<component-d>
					<strong>childsss</strong>
				</component-d>
			  </div>`,
	components: {
		'cc': cc
	},
	methods: {
		handleClick() {
			console.log(this.message);
			this.message += 'x';
		},
		propsEvent() {
			alert('success..');
		}
	}
});