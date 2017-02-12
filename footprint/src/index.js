import './main.css';
import Vue from 'vue/dist/vue.js';
import './server.js';

import './component/header/header.js';
import './component/banner/banner.js';
import './component/download/download.js';
import './component/feeds/feeds.js';
import './component/profile/profile.js';

let host = '';

window.global = {};

global.host = host;

global.server = (data, url, callback, type, dataType) => {
	Ajax({
		data: data || {},
		type: type || 'get',
		url: url,
		dataType: dataType || 'json',
		done: (res) => {
			callback && callback(res);
		}
	});
};

global.handleDownload = () => {
	let startTime = Date.now();

	let timer = setTimeout(() => {
		let endTime = Date.now();
		if ((endTime - startTime) < 2200) {
			window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.remarkmedia.app.kankan&ckey=CK1342812797881';
		}
	}, 2000);

	window.onblur = () => {
		clearTimeout(timer);
	};
};

new Vue({
	el: '#container',
	data: {
		params: null,
		isVip: true,
		menuType: 'feeds',
		platIcon: {
			instagram: require('./images/instagram.png'),
			weibo: require('./images/weibo.png'),
			twitter: require('./images/twitter.png'),
			facebook: require('./images/facebook.png')
		}
	},
	methods: {
		changeMenu(type) {
			this.menuType = type;
		},
		queryParams() {
			let search = location.search,
			theRequest = {};
			if (search.indexOf('?') < 0) {
				return;
			}
			search = search.substr(1);
			let paramArr = search.split('&'),
				max = paramArr.length;
			for (let i = 0; i < max; i ++) {
				theRequest[paramArr[i].split('=')[0]] = unescape(paramArr[i].split('=')[1]);
			}
			return theRequest;
		}
	},
	created() {
		this.params = this.queryParams() || {};
		this.params.userId = this.params.userId || '';
		this.params.locale = this.params.locale || 'zh_CN';
	}
});
