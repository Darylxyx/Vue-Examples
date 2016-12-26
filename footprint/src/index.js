import './main.css';
import Vue from 'vue/dist/vue.js';
import './server.js';

import './component/header/header.js';
import './component/banner/banner.js';
import './component/download/download.js';
import './component/feeds/feeds.js';
import './component/profile/profile.js';

let host = 'http://stage.pub.hzvb.kankanapp.com.cn';

window.global = {};

global.host = host;

global.server = (data, url, callback, type) => {
	Ajax({
		data: data || {},
		type: type || 'get',
		url: url,
		dataType: 'jsonp',
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
		},
		wxShare(data) {
			// data = JSON.parse(data);
			wx.config({
				appId: data.appId,
				timestamp: data.timestamp,
				nonceStr: data.nonceStr,
				signature: data.signature,
				debug: false,
				jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ']
			});

			wx.ready(() => {
				wx.onMenuShareTimeline({ //分享朋友圈
				    title: 'shareTitle', // 分享标题
				    link: window.location.href, // 分享链接
				    imgUrl: 'http://rm-dragon-cdn.kankanapp.com.cn/red-package/act_log', // 分享图标
				    success: function () { 
				        // 用户确认分享后执行的回调函数
				    },
				    cancel: function () { 
				        // 用户取消分享后执行的回调函数
				    }
				});

				wx.onMenuShareAppMessage({ //分享朋友
				    title: 'shareTitle', // 分享标题
				    desc: '分享一个来自探趣的精彩瞬间，点击链接查看更多', // 分享描述
				    link: window.location.href, // 分享链接
				    imgUrl: 'http://rm-dragon-cdn.kankanapp.com.cn/red-package/act_log', // 分享图标
				    type: '', // 分享类型,music、video或link，不填默认为link
				    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
				    success: function () { 
				        // 用户确认分享后执行的回调函数
				    },
				    cancel: function () { 
				        // 用户取消分享后执行的回调函数
				    }
				});

				wx.onMenuShareQQ({
				    title: 'shareTitle', // 分享标题
				    desc: '分享一个来自探趣的精彩瞬间，点击链接查看更多', // 分享描述
				    link: window.location.href, // 分享链接
				    imgUrl: 'http://rm-dragon-cdn.kankanapp.com.cn/red-package/act_log', // 分享图标http://rm-dragon-cdn.kankanapp.com.cn/red-package/act_log
				    success: function () { 
				       // 用户确认分享后执行的回调函数
				    },
				    cancel: function () { 
				       // 用户取消分享后执行的回调函数
				    }
				});
			});
		}
	},
	created() {
		this.params = this.queryParams() || {};
		this.params.userId = this.params.userId || '';
		this.params.locale = this.params.locale || 'zh_CN';
		// console.log(this.params);

		global.server({
			url: encodeURIComponent(window.location.href)
		}, 'https://h5.kankanapp.com.cn/wechatapi/', (res) => {
			// console.log(JSON.stringify(res));
			this.wxShare(res);
		});
	}
});
