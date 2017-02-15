import './profile.css';
import Vue from 'vue/dist/vue.js';

let { mapState, mapMutations, mapActions } = Vuex;

Vue.component('profile', {
	computed: {
		...mapState({
			isVip: 'isVip',
			platIcon: 'platIcon',
			isSpread: state => state.profile.isSpread,
			profileList: state => state.profile.profileList,
			relatedList: state => state.profile.relatedList
		})
	},
	template: `<div class="profile">
				<div :class="['profile-area', 'f-15', 'overflow', isSpread ? '' : 'profile-shrink']">
					<template v-for="item in profileList">
						<p class="lh-150 f-bold" style="margin-bottom:10px;">{{item.title}}</p>
						<p class="c-47 lh-150" style="margin-bottom: 23px;">{{item.text}}</p>
					</template>
				</div>
			  	<div v-if="!isSpread" class="more border-box f-15 f-bold" @click="handleSpread">more &gt;</div>
			  	<p class="f-15 f-bold">RELATED CELEBRITIES</p>
			  	<div class="related">
			  		<ul class="overflow" :style="{width: relatedList.length * 81 + 'px'}">
			  			<li @click="handleLink(item.profileId)" v-for="item in relatedList">
			  				<div class="related-avatar bg-img">
			  					<div class="bg-img" :style="{backgroundImage: 'url('+item.avatar+')'}"></div>
			  					<img class="plat-icon" :src="platIcon[item.platform]" />
			  				</div>
			  				<p class="c-1b f-bold text-overflow">{{item.nickName}}</p>
			  			</li>
			  		</ul>
			  	</div>
			  </div>`,
	methods: {
		handleLink(profileId) {
			// console.log(profileId);
		},
		...mapMutations(['handleSpread']),
		...mapActions(['profileServer'])
	},
	created() {
		if (!this.isVip) {
			return;
		}

		this.profileServer();
	}
});

