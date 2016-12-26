import './banner.css';
import Vue from 'vue/dist/vue.js';

Vue.component('banner', {
	data() {
		return {
			avatar: '',
			nickName: '',
			desc: '',
			followCount: 0,
			platform: '',
			recommendList: [],
			recommendShow: false
		};
	},
	props: ['params', 'isVip', 'platIcon', 'changeMenu', 'menuType'],
	template: `<div class="banner">
				<div class="banner-con bg-img">
					<div class="banner-avatar bg-img">
						<div class="bg-img border-box" :style="{backgroundImage: 'url('+avatar+')'}"></div>
						<img class="plat-icon" :src="platIcon[platform]" />
					</div>
					<div class="star-name">
						<span class="f-15 f-bold c-white">{{nickName}}</span>
						<img v-if="isVip" class="vip" src="${require('../../images/vip.png')}" />
					</div>
					<p class="c-white banner-desc" style="margin-top:8px;">{{desc}}</p>
					<p class="c-white" style="margin: 13px 0 18px 0">Followers {{followCount}}</p>
					<div class="inline-block overflow">
						<a @click="handleDownload" href="tanqu://home/test?p=12&d=1"><div class="border-box banner-follow c-white l">+ follow</div></a>
						<div @click="recommendSwitch" :class="[recommendShow ? 'arrow-open' : '', 'banner-arrow', 'r']"></div>
					</div>
				</div>
				<ul v-show="recommendShow" class="recommend-list">
					<li v-for="item in recommendList" class="overflow border-box">
						<div class="feeds-avatar l bg-img">
							<div class="bg-img" :style="{backgroundImage: 'url('+item.avatar+')'}"></div>
							<img class="plat-icon" :src="platIcon[item.platform]" />
						</div>
						<div class="l text-area overflow">
							<p class="f-15 f-bold" style="margin:8px 0 4px 0;">{{item.nickName}}</p>
							<p class="c-9b">{{item.description}}</p>
						</div>
						<a @click="handleDownload" href="tanqu://home/test?p=12&d=1"><div class="r btn-follow">+关注</div></a>
					</li>
				</ul>
				<div v-if="isVip" class="banner-menu overflow f-15 f-bold c-9b">
					<div @click="changeMenu('feeds')" :class="['l', menuType == 'feeds' ? 'c-02': '']">FEEDS</div>
					<div @click="changeMenu('profile')" :class="['r', menuType == 'profile' ? 'c-02': '']">PROFILE</div>
					<div class="line"></div>
				</div>
			  </div>`,
	methods: {
		handleDownload() {
			global.handleDownload();
		},
		recommendSwitch() {
			this.recommendShow = !this.recommendShow;
		}
	},

	created() {
		let {
			profileId,
			userId,
			locale
		} = this.params;

		let data0 = {
			profileId,
			userId,
			locale
		};
		global.server(data0, './src/component/banner/info.json', (res) => {
			console.log(res);
			if (res.meta.statusCode == 200) {
				let result = res.content;
				this.avatar = result.avatar;
				this.nickName = result.nickname;
				this.desc = result.description;
				this.followCount = result.followers;
				this.platform = result.platform;
			}
		});

		let data1 = {
			profileId,
			userId,
			locale
		};
		global.server(data1, './src/component/banner/recommend.json', (res) => {
			// console.log(res);
			if (res.meta.statusCode == 200) {
				this.recommendList = res.content;
			}
		});
	}
});