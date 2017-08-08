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

// var book = {};

// book.name = 'The Great Gatsby';

// Object.defineProperty(book, 'name', {
// 	get: function() {
// 		// console.log('getter');
// 		return this.name;
// 	}
// });

// console.log(book.name);