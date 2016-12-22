import './profile.css';
import Vue from 'vue/dist/vue.js';

Vue.component('profile', {
	data() {
		return {
			isSpread: false,
			profileList: [],
			relatedList: []
		}
	},
	props: ['params', 'isVip', 'platIcon'],
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
		handleSpread() {
			this.isSpread = true;
		},
		handleLink(profileId) {
			console.log(profileId);
			// console.log(`${window.location.href.split('?')[0]}?profileId=${profileId}&locale=${this.params.locale}`);
			window.location.href = `${window.location.href.split('?')[0]}?profileId=${profileId}&locale=${this.params.locale}`;
		}
	},
	created() {

		if (!this.isVip) {
			return;
		}

		let {
			profileId,
			userId,
			locale
		} = this.params;

		let data0 = {
			profileId: '23410080:instagram',
			locale
		};
		global.server(data0, global.host+'/api/v3/user/profile', (res) => {
			// console.log(res);
			if (res.meta.statusCode == 200) {
				this.profileList = JSON.parse(res.content);
			}
		});

		let data1 = {
			profileId
		};
		global.server(data1, global.host+'/api/v3/user/relate', (res) => {
			// console.log(res);
			if (res.meta.statusCode == 200) {
				this.relatedList = res.content;
			}
		});
	}
});

