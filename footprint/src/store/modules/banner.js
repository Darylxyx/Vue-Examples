const bannerStore = {
	state: {
		authorInfo: {
			avatar: ''
		},
		recommendList: [],
		recommendShow: false
	},
	mutations: {
		recommendSwitch(state) {
			state.recommendShow = !state.recommendShow;
		}
	},
	actions: {
		bannerServer({state, dispatch, rootState }) {
			let data = rootState.params;

			dispatch('server', {
				data: data, 
				url: './src/json/info.json', 
				callback: (res) => {
					if (res.meta.statusCode == 200) {
						state.authorInfo = res.content;
					}
				}
			});

			dispatch('server', {
				data: data, 
				url: './src/json/recommend.json', 
				callback: (res) => {
					if (res.meta.statusCode == 200) {
						state.recommendList = res.content;
					}
				}
			});
		}
	}
}

export default bannerStore;