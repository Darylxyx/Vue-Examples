<template>
	<div>
		<Headers></Headers>
		<router-view></router-view>
	</div>
</template>

<script>
import Headers from './component/Header.vue';

export default {
	components: {
		Headers
	}
}


</script>