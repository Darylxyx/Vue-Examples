<template>
	<h1>{{message}}</h1>
</template>

<script>
module.exports = {
	data () {
		const str = 'Hello Vue';
		return {
			message: str
		}
	}
}
</script>