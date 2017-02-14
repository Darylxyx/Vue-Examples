import './header.css';
import Vue from 'vue/dist/vue.js';
let { mapActions } = Vuex;

Vue.component('headers', {
	template: `<div class="header overflow">
				<img class="logo l" src="${require('../../images/logo.png')}" />
				<img class="logo-text l" src="${require('../../images/logo-text.png')}" />
				<a @click="handleDownload" href="tanqu://home/test?p=12&d=1"><div class="download-btn r">前往探趣</div></a>
			  </div>`,
	methods: {
		...mapActions([
			'handleDownload'
		])
	}
});