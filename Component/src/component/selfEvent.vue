<template>
	<div>
		<button @click='addCount'>筋络</button>
	</div>
</template>

<script>

export default {
	methods: {
		addCount() {
			this.$emit('addCon');
		}
	}
}

</script>