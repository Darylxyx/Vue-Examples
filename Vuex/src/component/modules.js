import Vue from 'vue/dist/vue.js';

const moduleA = {
	state: {
		ma1: 'ma1',
		ma2: 'ma2'
	},
	getters: {
		maGetter(state, getters, rootState) {
			console.log('moduleA getter', state, getters);
			console.log('moduleA getter', rootState);
			return 'A';
		}
	},
	mutations: {
		maMutation(state) { // 模块内mutation只接收本地state这一个参数
			console.log('moduleA mutation', state);
		}
	},
	actions: {
		maAction(context) {
			console.log('moduleA action', context);
			context.commit('maMutation');
			context.commit('mbMutation');
		}
	}
};

const moduleB = {
	state: {
		mb1: 'mb1',
		mb2: 'mb2'
	},
	getters: {
		mbGetter() {
			return 'B';
		}
	},
	mutations: {
		mbMutation(state) {
			console.log('moduleB mutation', state);
		}
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

console.log('ModuleA getters: ', store.getters);

store.dispatch('maAction');