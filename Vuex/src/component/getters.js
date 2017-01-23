import Vue from 'vue/dist/vue.js';
let { mapState, mapGetters } = Vuex;

Vue.use(Vuex);

// getters可以看成state的计算属性
const store = new Vuex.Store({
	state: {
		todos: [
			{ text: 'todo_A', done: true },
			{ text: 'todo_B', done: false }
		]
	},
	getters: {
		doneTodos(state) {
			console.log(this);
			return state.todos.filter(item => item.done);
		}
	}
});

const Getters = {
	store,
	template: `<h1>getters result is {{doneTodos}}</h1>`,
	computed: {
		...mapGetters({
			doneTodos: 'doneTodos'
		})
	}
};

export default Getters;