import './main.css';
import Vue from 'vue/dist/vue.js';
import store from './store/store.js';

import './component/header/header.js';
import './component/banner/banner.js';
import './component/download/download.js';
import './component/feeds/feeds.js';
import './component/profile/profile.js';

let { mapState, mapMutations } = Vuex;

new Vue({
	el: '#container',
	store,
	data: {
		params: null,
		...mapState(['menuType'])
	},
	// methods: {
	// 	changeMenu(type) {
	// 		this.menuType = type;
	// 	}
	// },
	created() {
		this.$store.commit('queryParams');
		console.log(this.$store.state);
		// console.log(this.queryParams());
		// this.params = this.queryParams() || {};
		// this.params.userId = this.params.userId || '';
		// this.params.locale = this.params.locale || 'zh_CN';
	}
});
