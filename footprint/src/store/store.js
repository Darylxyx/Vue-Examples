import Vue from 'vue/dist/vue.js';
import '../server.js';
import banner from './modules/banner.js';
import feeds from './modules/feeds.js';
import profile from './modules/profile.js';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		banner,
		feeds,
		// profile
	},
	state: {
		params: {},
		isVip: true,
		menuType: 'feeds',
		platIcon: {
			instagram: require('../images/instagram.png'),
			weibo: require('../images/weibo.png'),
			twitter: require('../images/twitter.png'),
			facebook: require('../images/facebook.png')
		}
	},
	getters: {

	},
	mutations: {
		changeMenu(state, type) {
			state.menuType = type;
		},
		queryParams(state) {
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
			state.params = theRequest;
		}
	},
	actions: {
		server(context, params) {
			let { data, url, callback, type, dataType } = params;
			Ajax({
				data: data || {},
				type: type || 'get',
				url: url,
				dataType: dataType || 'json',
				done: (res) => {
					callback && callback(res);
				}
			});
		},
		handleDownload() {
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
		}
	}
});

store.commit('queryParams');

export default store;