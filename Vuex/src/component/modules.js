import Vue from 'vue/dist/vue.js';

const moduleA = {
	state: {
		ma1: 'ma1',
		ma2: 'ma2',
		count: 1
	},
	getters: {
		maGetter(state, getters, rootState) {
			console.log('moduleA getter', state, getters);
			console.log('moduleA getter', rootState);
			return 'A';
		},
		addCount(state, getters, rootState) {
			console.log('xxxxx', state.count, rootState.b.count, rootState.count)
			return state.count + rootState.b.count + rootState.count;
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
			// // context.commit('maMutation');
			// // context.commit('mbMutation');
			context.dispatch('mbAction');
		}
	}
};

const moduleB = {
	state: {
		mb1: 'mb1',
		mb2: 'mb2',
		count: 2
	},
	getters: {
		mbGetter() {
			return 'B';
		}
	},
	mutations: {
		maMutation(state) {
			console.log('moduleB mutation', state);
		},
		sayCount(state, num) {
			console.log('count::::',state.count+num);
		}
	},
	actions: {
		mbAction({ commit, rootState }) {
			console.log('moduleB action', 11111111);
			commit('maMutation');
			commit('sayCount', rootState.a.count);
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
	},
	state: {
		rootStates: 'rootState',
		count: 3
	}
});

console.log('Root Module state:', store.state);

console.log('ModuleA store1 : ', store.state.a.ma1);

console.log('ModuleA getters: ', store.getters);

console.log('Add Getters:', store.getters.addCount);

// store.commit('maMutation');

store.dispatch('maAction');

// store.dispatch('mbAction');