const bannerStore = {
	state: {
		authorInfo: {},
		// avatar: '',
		// nickName: '',
		// desc: '',
		// followCount: 0,
		// platform: '',
		recommendList: [],
		recommendShow: false
	},
	mutations: {
		changeMenu(state, type, a) {
			console.log(a);
		}
	}
}

export default bannerStore;