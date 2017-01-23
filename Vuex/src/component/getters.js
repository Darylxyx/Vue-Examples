import Vue from 'vue/dist/vue.js';

// getters可以看成state的计算属性
const store = new Vuex({
	state: {
		todos: [
			{ text: 'todo_A', done: true },
			{ text: 'todo_B', done: false }
		]
	},
	getters: {
		doneTodos() {
			console.log(this);
		}
	}
});