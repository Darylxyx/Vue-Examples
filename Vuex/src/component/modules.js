import Vue from 'vue/dist/vue.js';

const moduleA = {
	state: {
		ma1: 'ma1',
		ma2: 'ma2'
	}
};

const moduleB = {
	state: {
		mb1: 'mb1',
		mb2: 'mb2'
	}
};

const moduleC = {
	state: {
		mc1: 'mc1'
	}
};

const store = new Vuex.Store({
	modules: {
		a: moduleA,
		b: moduleB,
		c: moduleC
	}
});

console.log('ModuleA store1 : ', store.state.a.ma1);

