<template>
	<div class='kb-content'>
		<div class='kb-left'>
			<div v-for="(item, index) in keyArr" class='kb-item kb-left-item b-r' :class="index < 9 && 'b-b'" :style="{height: itemH+'px', lineHeight: itemH+'px'}">{{item}}</div>
		</div>
		<div class='kb-right'>
			<div class='kb-item kb-right-item k-cancel b-b' :style="{height: itemH*2+'px', lineHeight: itemH*2+'px'}"></div>
			<div class='kb-item kb-right-item k-submit' :style="{height: itemH*2+'px', lineHeight: itemH*2+'px'}">确定</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			winW: window.innerWidth,
			keyArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'X', 0, 'B']
		};
	},

	computed: {
		itemH() {
			return this.winW / 4 * 0.66;
		},
		totalH() {
			return this.itemH * 4 + 1;
		}
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

.kb-item {
	font-size: 28px;
	position: relative;
	float: left;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	text-align: center;
	/*cursor: pointer;*/
}

.kb-item:active {
	background-color: #abdef3;
}

.kb-left-item {
	width: 33.33%;
	background-color: #fff;
}

.kb-right-item {
	width: 100%;
}

.k-cancel {
	background-color: #fff;
}

.k-submit {
	font-size: 18px;
	color: #fff;
	background-color: #244E94;
}

.k-submit:active {
	background-color: #256eac;
}

.b-t {
	border-top: 1px soild #E0E1E2;
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