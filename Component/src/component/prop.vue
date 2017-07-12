<template>
	<ul>
		<slot name='item' v-for='item in list' :text='item'>

		</slot>
	</ul>
</template>

<script>

export default {
	data() {
		return {
			list: ['list-1', 'list-2', 'list-3', 'list-4', 'list-5']
		}
	}
}

</script>