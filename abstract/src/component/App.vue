<template>
	<div>
		<h1>{{message}}</h1>
		<keyboard></keyboard>
	</div>
</template>

<script>
import keyboard from './Keyboard.vue';
module.exports = {
	data () {
		const str = 'Keyboard Component';
		return {
			message: str
		}
	},
	components: {
		keyboard
	}
}
</script>