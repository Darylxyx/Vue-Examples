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

// book.name = 'The Great Gatsby'; 

Object.defineProperty(book, 'year', {
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