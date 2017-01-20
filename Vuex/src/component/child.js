import Vue from 'vue/dist/vue.js';
// import { mapState } from 'vuex';

let { mapState } = Vuex;

console.log(mapState);

const Child = {
	template: `<div>
				<h1>Child Component is {{count}}</h1>
				<h1>{{stateA}}</h1>
				<h1>{{stateAdd}}</h1>
			  </div>`,
	// computed: mapState(['count', 'stateA', 'stateB', 'stateC'])
	computed: mapState({
		count: state => state.count,
		stateA: 'stateA',
		stateAdd(state) {
			return state.stateB + state.stateC;
		}
	})
};

export default Child;
