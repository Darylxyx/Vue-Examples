import './feeds.css';
import Vue from 'vue/dist/vue.js';
//2016-3-18 / 21:17
Vue.component('feeds', {
	data() {
		return {
			prevPlayer: null,
			currentPlayer: '',
			feedsList: []
		}
	},
	props: ['params', 'platIcon'],
	template: `<div class="feeds">
				<div class="feeds-item" v-for="item in feedsList">
					<div class="feeds-author overflow">
						<div class="feeds-avatar l bg-img">
							<div class="bg-img" :style="{backgroundImage: 'url('+item.author.avatar+')'}"></div>
							<img class="plat-icon" :src="platIcon[item.author.platform]" />
						</div>
						<div class="l">
							<p class="f-15 f-bold" style="margin:8px 0 2px 0;">{{item.author.nickname}}</p>
							<p class="c-9b">{{formatTime(item.publishTime)}}</p>
						</div>
					</div>
					<div class="feeds-media">
						<div v-if="item.postType=='image'" v-for="item0 in item.feedsMatrix" class="feeds-media-row overflow">
							<div v-for="item1 in item0" 
								:class="[item0.length > 2 ? 'media-item-3' : (item0.length == 1 ? 'media-item-1' : 'media-item-2'), 'feeds-media-item', 'bg-img', 'l']"
								:style="{backgroundImage: 'url('+item1.imageSpec[1].url+')'}"
							>
							</div>
						</div>
						<div @click="handlePlay(item.postId, $event)" v-if="item.postType=='video'" class="feeds-media-row overflow">
							<div v-show="currentPlayer!=item.postId" class="feeds-media-item media-item-1 bg-img"
								:style="{backgroundImage: 'url('+item.video.coverUrl+')'}"
							>
								<img class="play-icon" src="${require('../../images/play.png')}" />
							</div>
							<video v-show="currentPlayer==item.postId" controls="controls" preload="preload" src="http://cn-cq3-dx.acgvideo.com/vg5/2/56/5630229-1.mp4?expires=1482416400&ssig=acp63GDr_xNIgu96boCJNg&oi=3723336772&rate=150000"></video>
						</div>
					</div>
					<p class="f-15 c-47 lh-130" style="margin-bottom: 18px;">{{item.content}}</p>
					<div class="overflow feeds-contral">
						<img class="l" src="${require('../../images/like.png')}" />
						<span class="c-47 f-bold l" style="margin-right: 23px;">{{item.likeCount}}</span>
						<img class="l" src="${require('../../images/comment.png')}" />
						<span class="c-47 f-bold l">{{item.commentCount}}</span>
					</div>
					<div class="comment-list" v-if="item.hotComments.length > 0">
						<ul>
							<li class="overflow" v-for="item0 in item.hotComments">
								<div class="comment-avatar l bg-img">
									<div class="bg-img" :style="{backgroundImage: 'url('+item0.author.avatar+')'}"></div>
								</div>
								<p style="width: 70%;" class="l f-14 c-47 text-overflow"><span class="f-1b f-bold">{{item0.author.name}}：</span>{{item0.text}}</p>
							</li>
						</ul>
						<a @click="handleDownload" href="tanqu://home/test?p=12&d=1"><p v-if="Number(item.commentCount) > 3" class="c-47" style="margin-top:2px;">查看所有{{item.commentCount}}条评论 &gt;</p></a>
					</div>
				</div>
			  </div>`,
	methods: {
		handleDownload() {
			global.handleDownload();
		},
		handlePlay(postId, e) {
			this.prevPlayer && this.prevPlayer.pause();
			this.currentPlayer = postId;
			let video = e.currentTarget.querySelector('video');
			video.play();
			this.prevPlayer = video;
		},
		createMatrix() {
			this.feedsList.forEach((item, index) => {
				let Matrix = [];
				let arr = [];

				if (item.images.length < 3) {
					item.images.forEach((item0, index0) => {
						arr.push(item0);
					});
					Matrix.push(arr);
				} else {
					item.images.forEach((item0, index0) => {
						// console.log(item0);
						arr.push(item0);
						if ((index0+1) % 3 == 0) {
							Matrix.push(arr);
							arr = [];
						}
					});
				}
				item.feedsMatrix = Matrix;
			});
			// console.log(this.feedsList);
		},
		formatTime(ms) {
			let date = new Date(ms);
			let str = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} / ${date.getHours()}:${date.getMinutes()}`;
			// console.log(str);
			return str;
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
			page: 1,
			pageSize: 5,
			lastTp: 0
		};
		global.server(data0, global.host+'/api/v3/user/post', (res) => {
			console.log(res);
			if (res.meta.statusCode == 200) {
				this.feedsList = res.content;
				this.createMatrix();
			}
		});
	}
});
