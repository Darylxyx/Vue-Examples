<template>
	<ul>
		<slot v-for='item in list' :text='item'>
			<li class='default-list-style'>{{item}}</li>
		</slot>
	</ul>
</template>

<script>

export default {
	props: ['list']
}

</script>