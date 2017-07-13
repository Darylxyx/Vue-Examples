import Vue from 'vue/dist/vue.js';

Vue.component('component-e', {
	data() {
		return {
			msg: 'JSX'
		}
	},
	render(h) {
		// console.log
		return (<div>
					<h1 data-msg={this.msg}>component-e use {this.msg}</h1>
				</div>);
	}
});