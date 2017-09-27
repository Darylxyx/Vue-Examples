<template>
	<div>
		<h1>{{message}}</h1>
		<router-view></router-view>
	</div>
</template>

<script>
module.exports = {
	data () {
		const str = 'Async Lazy Load';
		return {
			message: str
		}
	}
}
</script>