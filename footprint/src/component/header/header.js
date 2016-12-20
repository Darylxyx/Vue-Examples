import './header.css';
import Vue from 'vue/dist/vue.js';

Vue.component('headers', {
	template: `<div class="header overflow">
				<img class="logo l" src="${require('../../images/logo.png')}" />
				<img class="logo-text l" src="${require('../../images/logo-text.png')}" />
				<div class="download-btn r">前往探趣</div>
			  </div>`
});