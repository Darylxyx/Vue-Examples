import Vue from 'vue/dist/vue.js';
let { mapState, mapGetters } = Vuex;

Vue.use(Vuex);

// getters可以看成state的计算属性
const store = new Vuex.Store({
	state: {
		todos: [
			{ text: 'todo_A', done: true },
			{ text: 'todo_B', done: false }
		],
		number: 1
	},
	getters: {
		doneTodos(state, getters) {
			console.log(this); //undefined
			console.log(getters);

			let str = '';
			state.todos.forEach((item) => {
				if (item.done) {
					str += item.text;
				}
			});
			return str + '_' + getters.addNum;
		},
		addNum(state) {
			return state.number + 5;
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