<template>
	<div class='container'>
		<h1>{{message}}</h1>
		<input @focus='handleShowKeyboard($event)' v-model='value' type='text' class='input' />
		<keyboard ref='kbref' sp-key="X" max-length='6' random='true' @submit-event='handleSubmit' @change-event='handleChange'></keyboard>
	</div>
</template>
<script>
import keyboard from './Keyboard.vue';
export default {
	data () {
		return {
			message: 'Keyboard Component',
			value: ''
		}
	},

	methods: {
		handleChange(value) {
			this.value = value;
		},

		handleShowKeyboard(e) {
			e.preventDefault();
			this.$refs.kbref.keyboardToggle(true);
		},

		handleSubmit() {
			console.log('submit: ' + this.value);
		}
	},

	components: {
		keyboard
	}
}
</script>
<style>
.input {
	display: block;
	margin: 30px auto 0 auto;
	font-size: 22px;
	padding: 10px;
}
</style>