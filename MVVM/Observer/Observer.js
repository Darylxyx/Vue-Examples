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

	

	fns.forEach(function(fn, index) {
		fn.apply(_this, arg);
	});
};

saleOffices.listen('80平', function(price) {
	console.log(price);
});

// saleOffices.listen(function(price, suqareMeter) {
// 	console.log(price);
// 	console.log(suqareMeter);
// });

saleOffices.trigger('80平', 88);
// saleOffices.trigger(200, 110);