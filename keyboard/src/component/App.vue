<template>
	<div class='container'>
		<h1 class='title'>{{title}}</h1>
		<ul class='number-input' @click='handleShowKeyboard'>
			<li>{{inputArr[0]}}</li>
			<li>{{inputArr[1]}}</li>
			<li>{{inputArr[2]}}</li>
			<li>{{inputArr[3]}}</li>
			<li>{{inputArr[4]}}</li>
			<li>{{inputArr[5]}}</li>
		</ul>
		<input v-show='false' @focus='handleShowKeyboard($event)' v-model='value' type='text' class='input' />
		<keyboard ref='kbref' max='6' random='false' @submit-event='handleSubmit' @change-event='handleChange'></keyboard>
	</div>
</template>
<script>
import keyboard from './Keyboard.vue';
export default {
	data () {
		return {
			inputArr: [],
			title: 'Keyboard Component'
		}
	},

	methods: {
		handleChange(value, currentValue) {
			// console.log(value, currentValue);
			this.inputArr = value.split('');
			// this.value = value;
		},

		handleShowKeyboard(e) {
			e && e.preventDefault();
			this.$refs.kbref.keyboardToggle(true);
		},

		handleSubmit() {
			if (this.inputArr.length != 6) return;
			console.log('submit: ' + this.inputArr.join(''));
			this.$refs.kbref.handleInit();
			this.$refs.kbref.handleClear();
		}
	},

	components: {
		keyboard
	}
}
</script>
<style>
.title {
	text-align: center;
	margin-top: 30px;
}

.number-input {
	display: inline-block;
	overflow: hidden;
	margin-top: 30px;
}

.number-input li {
	width: 40px;
	height: 40px;
	background-color: #fff;
	float: left;
	border: 1px solid #E0E1E2;
	border-left: none;
	text-align: center;
	line-height: 40px;
	font-size: 18px;
}

.number-input li:first-child {
	border-left: 1px solid #E0E1E2;
}

.input {
	display: block;
	margin: 30px auto 0 auto;
	font-size: 22px;
	padding: 10px;
}
</style>