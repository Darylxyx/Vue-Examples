var Observer = (function() {

	var clientList = {},
		listen, remove, trigger;

	listen = function(key, fn) {
		if (!clientList[key]) {
			clientList[key] = [];
		}
		clientList[key].push(fn);
	};

	remove = function(key, fn) {
		var fns = clientList[key];
		// console.log(fns);
		if (!fns) return;

		if (!fn) {
			fns = [];
		} else {
			fns.forEach(function(item, index) {
				if (item == fn) {
					console.log(index);
					fns.splice(index, 1);
				}
			});
		}
	};

	trigger = function() {
		var key = Array.prototype.shift.call(arguments),
			arg = arguments,
			fns = clientList[key],
			_this = this;

		if (!fns || !fns.length) {
			return;
		}

		fns.forEach(function(fn, index) {
			fn.apply(_this, arg);
		});
	};

	return {
		listen: listen,
		remove: remove,
		trigger: trigger
	};

})();

function fn1(price) {
	console.log('原价：' + price);
}

function fn2(price) {
	console.log('折扣价：' + price*0.8);
}

//订阅者
Observer.listen('80平', fn1);

Observer.listen('80平', fn2);

Observer.listen('100平', fn1);

//发布者
Observer.trigger('80平', 88);
Observer.trigger('100平', 110);

Observer.remove('80平', fn1);

Observer.trigger('80平', 88);