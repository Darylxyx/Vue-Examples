import Vue from 'vue/dist/vue.js';
let { mapState } = Vuex;

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 0,
		obj: {
			a: 'a',
			b: 'b',
			c: 'c'
		}
	},
	mutations: {
		addCount(state, data) {
			state.count += data.num;
			state.count += data.text;
		},
		addObj(state) {
			// console.log(state);
			// mutation中对对象添加属性，不可在原对象上添加
			state.obj = {...state.obj, d: 'd'};
			console.log(state.obj);
		}
	}
});

store.commit('addCount', {
	num: 10,
	text: '*'
});

store.commit('addObj');

// console.log(store.state.count);

const Mutations = {
	template: `<div>
				<h1>Mutations count is {{count}}</h1>
				<h1>Mutations obj is {{obj}}</h1>
			  </div>`,
	computed: mapState({
		count: 'count',
		obj(state) {
			console.log(state);
			// 这里的state为根节点state，所以需要state单一

			let str = [];

			for (let o in store.state.obj) {
				str.push(store.state.obj[o]);
			}

			str = str.join('，')

			return str;
		}
	})
};

export default Mutations;