import './feeds.css';
import Vue from 'vue/dist/vue.js';
//2016-3-18 / 21:17
Vue.component('feeds', {
	data() {
		return {
			feedsList: []
		}
	},
	template: `<div class="feeds">
				<div class="feeds-item" v-for="item in feedsList">
					<div class="feeds-author overflow">
						<div class="feeds-avatar l bg-img">
							<div class="bg-img" :style="{backgroundImage: 'url('+item.author.avatar+')'}"></div>
						</div>
						<div class="l">
							<p class="f-15 f-bold" style="margin:8px 0 2px 0;">{{item.author.nickname}}</p>
							<p class="c-9b">{{item.publishTime}}</p>
						</div>
					</div>
					<div class="feeds-media">
						<div class="feeds-media-row overflow">
							<div class="feeds-media-item media-item-1 bg-img"></div>
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
						<p v-if="Number(item.commentCount) > 3" class="c-47" style="margin-top:2px;">查看所有{{item.commentCount}}条评论 &gt;</p>
					</div>
				</div>
			  </div>`,

	mounted() {
		let data0 = {
			profileId: 'SportsDayDFW:twitter',
			userId: '6257',
			page: 1,
			pageSize: 10,
			lastTp: 0
		};
		server(data0, '/api/v3/user/post', (res) => {
			console.log(res);
			if (res.meta.statusCode == 200) {
				this.feedsList = res.content;
			}
		});
	}
});

				// <div class="feeds-item">
				// 	<div class="feeds-author overflow">
				// 		<div class="feeds-avatar l bg-img">
				// 			<div class="bg-img"></div>
				// 		</div>
				// 		<div class="l">
				// 			<p class="f-15 f-bold" style="margin:8px 0 2px 0;">Beyonce</p>
				// 			<p class="c-9b">2016-3-18 / 21:17</p>
				// 		</div>
				// 	</div>
				// 	<div class="feeds-media">
				// 		<div class="feeds-media-row overflow">
				// 			<div class="feeds-media-item media-item-2 bg-img l"></div>
				// 			<div class="feeds-media-item media-item-2 bg-img l"></div>
				// 		</div>
				// 	</div>
				// 	<p class="f-15 c-47 lh-130" style="margin-bottom: 18px;">Sunday night Korean food dinner with love one. for me, there’s no better way to close out a week.</p>
				// 	<div class="overflow feeds-contral">
				// 		<img class="l" src="${require('../../images/like.png')}" />
				// 		<span class="c-47 f-bold l" style="margin-right: 23px;">32</span>
				// 		<img class="l" src="${require('../../images/comment.png')}" />
				// 		<span class="c-47 f-bold l">29</span>
				// 	</div>
				// </div>
				// <div class="feeds-item">
				// 	<div class="feeds-author overflow">
				// 		<div class="feeds-avatar l bg-img">
				// 			<div class="bg-img"></div>
				// 		</div>
				// 		<div class="l">
				// 			<p class="f-15 f-bold" style="margin:8px 0 2px 0;">Beyonce</p>
				// 			<p class="c-9b">2016-3-18 / 21:17</p>
				// 		</div>
				// 	</div>
				// 	<div class="feeds-media">
				// 		<div class="feeds-media-row overflow">
				// 			<div class="feeds-media-item media-item-3 bg-img l"></div>
				// 			<div class="feeds-media-item media-item-3 bg-img l"></div>
				// 			<div class="feeds-media-item media-item-3 bg-img l"></div>
				// 		</div>
				// 		<div class="feeds-media-row overflow">
				// 			<div class="feeds-media-item media-item-3 bg-img l"></div>
				// 			<div class="feeds-media-item media-item-3 bg-img l"></div>
				// 			<div class="feeds-media-item media-item-3 bg-img l"></div>
				// 		</div>
				// 		<div class="feeds-media-row overflow">
				// 			<div class="feeds-media-item media-item-3 bg-img l"></div>
				// 			<div class="feeds-media-item media-item-3 bg-img l"></div>
				// 			<div class="feeds-media-item media-item-3 bg-img l"></div>
				// 		</div>
				// 	</div>
				// 	<p class="f-15 c-47 lh-130" style="margin-bottom: 18px;">Sunday night Korean food dinner with love one. for me, there’s no better way to close out a week.</p>
				// 	<div class="overflow feeds-contral">
				// 		<img class="l" src="${require('../../images/like.png')}" />
				// 		<span class="c-47 f-bold l" style="margin-right: 23px;">32</span>
				// 		<img class="l" src="${require('../../images/comment.png')}" />
				// 		<span class="c-47 f-bold l">29</span>
				// 	</div>
				// </div>