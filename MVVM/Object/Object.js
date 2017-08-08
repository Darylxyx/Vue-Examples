//=================================数据属性==============================

var person = {};

Object.defineProperty(person, 'name', {
	configurable: false, //是否可删除
	enumerable: false, //是否可遍历
	writable: false, //是否可改写
	value: 'Ada'
});

delete person.name;

console.log(person.name);

person.name = 'tom';

console.log(person.name);

for (var i in person) {
	console.log(person[i]);
}

//=================================访问器属性=============================

var book = {
	_year: 2004
};

Object.defineProperty(book, 'year', { //在设置某个访问器属性时，不能在 getter 和 setter 中访问自身，否则会循环引用。
	get: function() {
		console.log('getter');
		return this._year;
	},

	set: function(newValue) {
		console.log('setter');
		this._year = newValue;
	}
});

book.year = 2005;

console.log(book.year);

//不能将对象的属性同时设置为数据属性和访问器属性