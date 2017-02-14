import './banner.css';
import Vue from 'vue/dist/vue.js';

let { mapState, mapMutations, mapActions } = Vuex;

Vue.component('banner', {
	computed: {
		...mapState({
			isVip: 'isVip',
			params: 'params',
			platIcon: 'platIcon',
			menuType: 'menuType',
			authorInfo: state => state.banner.authorInfo,
			recommendShow: state => state.banner.recommendShow,
			recommendList: state => state.banner.recommendList
		})
	},
	template: `<div class="banner">
				<div class="banner-con bg-img">
					<div class="banner-avatar bg-img">
						<div class="bg-img border-box" :style="{backgroundImage: 'url('+authorInfo.avatar+')'}"></div>
						<img class="plat-icon" :src="platIcon[authorInfo.platform]" />
					</div>
					<div class="star-name">
						<span class="f-15 f-bold c-white">{{authorInfo.nickname}}</span>
						<img v-if="isVip" class="vip" src="${require('../../images/vip.png')}" />
					</div>
					<p class="c-white banner-desc" style="margin-top:8px;">{{authorInfo.description}}</p>
					<p class="c-white" style="margin: 13px 0 18px 0">Followers {{authorInfo.followers}}</p>
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
		...mapMutations(['changeMenu', 'recommendSwitch']),
		...mapActions(['bannerServer', 'handleDownload'])
	},
	created() {
		this.bannerServer();
	}
});