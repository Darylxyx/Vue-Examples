<template>
	<div class='kb-content' :class='!keyboardShow && "kb-hide"'>
		<div class='kb-left'>
			<div v-for="(item, index) in keyArr" class='kb-item kb-left-item b-r' :class="index < 9 && 'b-b'" :style="{height: itemH + 'px', lineHeight: itemH + 'px'}" @click="handleInput(item)">{{item}}</div>
			<div class='kb-item kb-left-item b-r' :style="{height: itemH + 'px', lineHeight: itemH + 'px'}" @click='keyboardToggle(false)'>
				<img class='submit-icon' :src="require('../images/hide.png')" />
			</div>
		</div>
		<div class='kb-right'>
			<div @click='handleDelete' class='kb-item kb-right-item k-cancel b-b' :style="{height: itemH * 2 + 'px', lineHeight: itemH * 2 + 'px'}">
				<img class='delete-icon' :src="require('../images/delete.png')" />
			</div>
			<div @click='handleSubmit' class='kb-item kb-right-item k-submit' :style="{height: itemH * 2 + 'px', lineHeight: itemH * 2 + 'px'}">确定</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'keyboard',
	props: {
		spKey: String, 
		random: {
			type: Boolean,
			default: false
		}, 
		max: Number
	},
	data() {
		return {
			winW: window.innerWidth < 500 ? window.innerWidth : 500,
			baseArr: [],
			inputStr: '',
			keyboardShow: true
		};
	},

	computed: {
		keyArr() {
			this.handleInit();
			return this.baseArr;
		},

		itemH() {
			return this.winW / 4 * 0.66;
		}
	},

	methods: {
		handleInit() {
			let spKey = this.spKey;
			this.baseArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

			if (spKey == undefined || spKey == 'undefined' || spKey == null) {
				spKey = '';
			}

			if (this.random && this.random != 'false') {
				this.baseArr.sort(function() {
					return Math.random() - Math.random();
				});
			}

			this.baseArr.splice(this.baseArr.length - 1, 0, spKey);
		},

		handleInput(value) {

			if (value == '' || value == undefined || value == null) {
				return;
			}

			let max = Number(this.max);

			if (!isNaN(max) && this.inputStr.length+1 > max) {
				return;
			}

			this.inputStr += value;
			this.$emit('change-event', this.inputStr, value);
		},

		handleDelete() {
			let str = this.inputStr;

			if (!str.length) return;

			this.inputStr = str.substring(0, str.length - 1);
			this.$emit('change-event', this.inputStr);
		},

		keyboardToggle(type) {
			this.keyboardShow = type;
		},

		handleSubmit() {
			this.$emit('submit-event');
		},

		handleClear() {
			this.inputStr = '';
			this.$emit('change-event', this.inputStr, '');
		}
	}
}
</script>
<style>
.kb-content {
	width: 100%;
	position: absolute;
	left: 0;
	bottom: 0;
	overflow: hidden;
	border-top: 1px solid #D2D3D4;
	-webkit-transition: all linear 0.4s;
	transition: all linear 0.4s;
}

.kb-hide {
	-webkit-transform: translateY(100%);
	-ms-transform: translateY(100%);
	transform: translateY(100%);
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
	width: 33.3333333%;
	background-color: #fff;
}

.kb-right-item {
	width: 100%;
}

.k-cancel {
	font-size: 18px;
	background-color: #fff;
	position: relative;
}

.delete-icon {
	width: 42%;
	position: absolute;
	left: 50%;
	margin-left: -21%;
	top: 50%;
	margin-top: -11%;
}

.k-submit {
	font-size: 18px;
	color: #fff;
	background-color: #244E94;
	position: relative;
}

.submit-icon {
	position: absolute;
	width: 48%;
	left: 50%;
	margin-left: -24%;
	top: 50%;
	margin-top: -17%;
}

.k-submit:active {
	background-color: #256eac;
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