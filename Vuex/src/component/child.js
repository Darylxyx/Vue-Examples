import Vue from 'vue/dist/vue.js';
// import { mapState } from 'vuex';

let { mapState } = Vuex;

console.log(mapState);

const Child = {
	template: `<h1>Child Component is {{childCount}}</h1>`,
	computed: {
		childCount() {
			return this.$store.state.count;
		}
	}
};

export default Child;
