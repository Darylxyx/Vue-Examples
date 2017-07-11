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
	},
	computed: {
		...mapState(['menuType'])
	},
	created() {
	
	}
});
