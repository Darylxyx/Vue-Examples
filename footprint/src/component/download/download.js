import './download.css';
import Vue from 'vue/dist/vue.js';

Vue.component('download', {
	template: `<div class="overflow">
				<a @click="handleDownload" href="tanqu://home/test?p=12&d=1"><div class="download-bar c-white">下载探趣APP，阅读更多精彩资讯</div></a>
			  </div>`,
	methods: {
		handleDownload() {
			global.handleDownload();
		}
	}
});