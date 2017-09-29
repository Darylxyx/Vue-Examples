<template>
	<div class='container'>
		<h1>{{message}}</h1>
		<input @focus='handleShowKeyboard($event)' v-model='value' type='text' class='input' />
		<keyboard sp-key="X" random="true" max-length='6' @submit-event='handleSubmit' @change-event='handleChange'></keyboard>
	</div>
</template>
<script>
import keyboard from './Keyboard.vue';
module.exports = {
	data () {
		const str = 'Keyboard Component';
		return {
			message: str,
			value: ''
		}
	},

	methods: {
		handleChange(value) {
			// console.log(value);
			this.value = value;
		},

		handleShowKeyboard(e) {
			// console.log(e.preventDefault);
			e.preventDefault();
			globalEvent.$emit('keyboard-show', true);
		},

		handleSubmit() {
			console.log('submit');
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