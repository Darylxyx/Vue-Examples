import Server from './server.js';

window.Global = {};

Global.host = window.location.href.indexOf('aiopen.datapeak.com.cn') != -1 ? 'http://aiopen.datapeak.com.cn' : 'http://aiopen-pub.stage.datapeak.com.cn';

Global.server = (data, url, callback, type, loadingHide) => {
	// loadingHide || Global.load(true);
	Server({
		data: data || {},
		url: url,
		type: type || 'get',
		done(res) {
			// loadingHide || Global.load(false);
			if (res.code == 106) {
				Global.tokenVerify();
			}
			callback && callback(res);
		}
	});
};

Global.queryParams = () => {
	let search = '?' + window.location.href.split('?')[1],
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

// Global.load = (flag) => {
// 	Global.loadingPage = Global.loadingPage || document.querySelector('#loading');
// 	if (flag) {
// 		Global.loadingPage.style.display = 'block';
// 	} else {
// 		Global.loadingPage.style.display = 'none';
// 	}
// };

// Global.router = (hash) => {
// 	window.location.href = window.location.origin + window.location.pathname + '#' + hash;
// };

Global.setCookie = (name, value) => {
	let Days = 1,
		exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + escape (value) + ";expires=" + exp.toGMTString();
};

Global.getCookie = (name) => {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"); //正则匹配
	if (arr = document.cookie.match(reg)) {
		return unescape(arr[2]);
	} else {
		return null;
	}
};

Global.delCookie = (name) => {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = Global.getCookie(name);
	if (cval != null) {
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
	}
};

Global.tokenVerify = () => {
	let userToken = Global.getCookie('user_token');
	// console.log(userToken);
	if (userToken) {
		Global.token = userToken;
	} else {
		Global.router('/login');
	}
};

// Global.tokenVerify();