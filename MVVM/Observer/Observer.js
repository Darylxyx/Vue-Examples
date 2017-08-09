var saleOffices = {};

saleOffices.clientList = {};

saleOffices.listen = function(key, fn) {
	if (!this.clientList[key]) {
		this.clientList[key] = [];
	}
	this.clientList[key].push(fn);
};

saleOffices.trigger = function() {
	var key = Array.prototype.shift.call(arguments),
		arg = arguments,
		fns = this.clientList[key],
		_this = this;

	if (!fns || !fns.length) {
		return;
	}

	fns.forEach(function(fn, index) {
		fn.apply(_this, arg);
	});
};

saleOffices.listen('80平', function(price) {
	console.log('原价：' + price);
});

saleOffices.listen('80平', function(price) {
	console.log('折扣价：' + price*0.8);
});

saleOffices.listen('100平', function(price) {
	console.log('原价：' + price);
});

saleOffices.trigger('80平', 88);
saleOffices.trigger('100平', 110);