import './banner.css';
import Vue from 'vue/dist/vue.js';

Vue.component('banner', {
	props: ['changeMenu', 'menuType', 'avatar', 'nickName', 'desc', 'followCount'],
	template: `<div class="banner">
				<div class="banner-con bg-img">
					<div class="banner-avatar bg-img">
						<div class="bg-img border-box" :style="{backgroundImage: 'url('+avatar+')'}"></div>
					</div>
					<span class="f-15 f-bold c-white star-name">{{nickName}}</span>
					<p class="c-white banner-desc">{{desc}}</p>
					<p class="c-white" style="margin: 13px 0 18px 0">Followers {{followCount}}</p>
					<div class="inline-block overflow">
						<div class="border-box banner-follow c-white l">+ follow</div>
						<div class="banner-arrow r"></div>
					</div>
				</div>
				<div class="banner-menu overflow f-15 f-bold c-9b">
					<div @click="changeMenu('feeds')" :class="['l', menuType == 'feeds' ? 'c-02': '']">FEEDS</div>
					<div @click="changeMenu('profile')" :class="['r', menuType == 'profile' ? 'c-02': '']">PROFILE</div>
					<div class="line"></div>
				</div>
			  </div>`
});