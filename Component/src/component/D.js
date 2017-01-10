import Vue from 'vue/dist/vue.js';

Vue.component('component-d', {
	render(createElement) {
		console.log(this.$slots);
		return createElement(
			'h3',
			{
				attrs: {
					'data-id': 'tessdd'
				}
			},
			[
				createElement('div', 'I am com-d child')
			].concat(this.$slots.default)
		);
	}
});