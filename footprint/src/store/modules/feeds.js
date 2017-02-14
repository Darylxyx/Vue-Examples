const feedsStore = {
	state: {
		prevPlayer: null,
		currentPlayer: '',
		feedsList: []
	},
	mutations: {
		createMatrix(state, feedsList) {
			console.log(feedsList);
			feedsList.forEach((item, index) => {
				let Matrix = [];
				let arr = [];
				let max = item.images.length;

				item.images.forEach((item0, index0) => {
					arr.push(item0);
					if ((index0+1) % 3 == 0) {
						Matrix.push(arr);
						arr = [];
					}
					if ((index0+1) == max) {
						Matrix.push(arr);
					}
				});

				item.feedsMatrix = Matrix;
			});
			state.feedsList = feedsList;
		}
	}
}

export default feedsStore;