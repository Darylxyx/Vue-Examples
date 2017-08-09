var saleOffices = {};

saleOffices.clientList = [];

saleOffices.listen = function(fn) {
	this.clientList.push(fn);
};

saleOffices.trigger = function() {
	for (var i = 0, max = this.clientList.length; i < max; i ++) {
		var fn = this.clientList[i];
		fn.apply(this, arguments);
	}
};

saleOffices.listen(function(price, suqareMeter) {
	
});