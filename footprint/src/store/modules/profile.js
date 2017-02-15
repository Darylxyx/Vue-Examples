const profileStore = {
	state: {
		isSpread: false,
		profileList: [],
		relatedList: []
	},
	mutations: {
		handleSpread(state) {
			state.isSpread = true;
		}
	},
	actions: {
		profileServer({ state, dispatch, rootState }) {
			let data = rootState.params;

			dispatch('server', {
				data: data, 
				url: './src/json/profile.json', 
				callback: (res) => {
					if (res.meta.statusCode == 200) {
						state.profileList = JSON.parse(res.content);
					}
				}
			});

			dispatch('server', {
				data: data, 
				url: './src/json/relate.json', 
				callback: (res) => {
					if (res.meta.statusCode == 200) {
						state.relatedList = res.content;
					}
				}
			});
		}
	}
}

export default profileStore;