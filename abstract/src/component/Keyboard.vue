<template>
	<div class='kb-content'>
		<div class='kb-left'>
			<div v-for="(item, index) in keyArr" class='kb-left-item b-r' :class="index < 9 && 'b-b'"></div>
		</div>
		<div class='kb-right'>
			<div class='kb-right-item k-cancel b-b'></div>
			<div class='kb-right-item k-submit'></div>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			keyArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 0, 'B']
		};
	}
}

</script>

<style>
.kb-content {
	width: 100%;
	position: fixed;
	left: 0;
	bottom: 0;
	overflow: hidden;
	border-top: 1px solid #D2D3D4;
}

.kb-left {
	width: 75%;
	float: left;
	overflow: hidden;
}

.kb-right {
	width: 25%;
	float: right;
	overflow: hidden;
}

.kb-left-item {
	width: 33.33%;
	padding-bottom: 22.22%;
	position: relative;
	float: left;
	background-color: #F2F3F4;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

.kb-right-item {
	width: 100%;
	padding-bottom: 133.33%;
	position: relative;
	float: left;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

.k-cancel {
	background-color: #F2F3F4;
}

.k-submit {
	background-color: #244E94;
}

.b-t {
	border-top: 1px soild #E0E1E2
}

.b-b {
	border-bottom: 1px solid #E0E1E2;
}

.b-l {
	border-left: 1px solid #E0E1E2;
}

.b-r {
	border-right: 1px solid #E0E1E2;
}

</style>