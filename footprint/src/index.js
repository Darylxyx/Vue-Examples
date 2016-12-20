import './main.css';
import Vue from 'vue/dist/vue.js';
import './server.js';

import './component/header/header.js';
import './component/banner/banner.js';
import './component/download/download.js';
import './component/feeds/feeds.js';
import './component/profile/profile.js';

let host = window.location.href.indexOf('h5.kankanapp.com.cn') != -1 ? 'https://prod-api.kankanapp.com.cn' : 'http://stage.pub.hzvb.kankanapp.com.cn';

window.server = (data, url, callback, type) => {
	Ajax({
		data: data || {},
		type: type || 'get',
		url: host + url,
		dataType: 'jsonp',
		done: (res) => {
			callback && callback(res);
		}
	});
};

new Vue({
	el: '#container',
	data: {
		avatar: '',
		nickName: '',
		desc: '',
		followCount: 0,
		menuType: 'feeds',
	},
	methods: {
		changeMenu(type) {
			this.menuType = type;
		}
	},
	mounted() {
		let data0 = {
			profileId: '5658420858:weibo',
			userId: '6257',
			locale: 'zh_CN'
		};
		server(data0, '/api/v3/user/info', (res) => {
			// console.log(res);
			if (res.meta.statusCode == 200) {
				let result = res.content;
				this.avatar = result.avatar;
				this.nickName = result.nickname;
				this.desc = result.description;
				this.followCount = result.followers;
			}
		});

		let data1 = {
			profileId: '5658420858:weibo',
			userId: '6257',
			locale: 'zh_CN'
		};
		server(data1, '/api/v3/user/recommend', (res) => {
			// console.log(res);
			if (res.meta.statusCode == 200) {
			
			}
		});
	}
});
