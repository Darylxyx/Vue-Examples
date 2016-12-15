import Vue from 'vue/dist/vue.js';

Vue.component('bb', {
	template: `<h1 v-on:click="handlClick">{{text}}{{prop}}</h1>`,
	data() {
		return {
			text: 'component-b-msg'
		}
	},
	props: {
		prop: {
			type: String,
			required: true
		}
	},
	methods: {
		handlClick() {
			alert(1);
		}
	}
});