<template>
	<div class='page page-12'>
		<h1>{{message}}</h1>
		<router-link v-for='item in goodsList' :to="'/Third/goods/'+item"><div class='good-item text-center'>{{item}}</div></router-link>
	</div>
</template>

<script>
module.exports = {
	data () {
		return {
			message: 'Goods List',
			goodsList: ['id_A', 'id_B', 'id_C', 'id_D']
		}
	}
}
</script>

<style>
.good-item {
	width: 200px;
	height: 200px;
	border-radius: 6px;
	background-color: #f7f7f7;
	float: left;
	margin: 10px;
	color: #000;
	font-size: 30px;
	line-height: 200px;
	cursor: pointer;
}

</style>