<template>
	<div @mouseout='handleNavOut' class='header'>
		<div class='header-main text-center'>
			<ul @mouseover='handleNavHover' class='main-nav overflow'>
				<router-link to="/First"><li value='first'>First</li></router-link>
				<router-link to="/Second"><li value='second'>Second</li></router-link>
				<router-link to="/Third"><li value='third'>Third</li></router-link>
			</ul>
		</div>
		<div class='header-vice relative'>
			<p class='vice-adver-area'>- Bikini Adver Area -</p>
			<div @mouseover='handleViceShow' class='vice-nav-bar text-center' :style="{display: viceNavShow ? 'block' : 'none'}">
				<ul class='vice-nav overflow'>
					<router-link v-for="item in viceNavList" :to='item.link' :key='item.name'><li>{{item.name}}</li></router-link>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

const Menu = {
	first: [
		{ name: 'FirstA', link: '/First/FirstA' },
		{ name: 'FirstB', link: '/First/FirstB' },
		{ name: 'FirstC', link: '/First/FirstC' }
	],
	second: [
		{ name: 'SecondA', link: '/Second/SecondA' },
		{ name: 'SecondB', link: '/Second/SecondB' },
		{ name: 'SecondC', link: '/Second/SecondC' }
	],
	third: [
		{ name: 'ThirdA', link: '/Third/ThirdA' },
		{ name: 'ThirdB', link: '/Third/ThirdB' }
	]
};

export default {
	data() {
		return {
			viceNavShow: false,
			viceNavList: []
		}
	},
	methods: {
		handleNavHover(e) {
			// console.log(e.target);
			let type = e.target.getAttribute('value');
			// console.log(type);
			this.viceNavList = Menu[type];
			this.handleViceShow();
		},
		handleViceShow() {
			this.viceNavShow = true;
		},
		handleNavOut() {
			this.viceNavShow = false;
		}
	}
}

</script>

<style>

.header {
	width: 100%;
	/*margin-bottom: 20px;*/
	box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.header-main {
	width: 100%;
	height: 76px;
	background-color: #fff;
}

.header-vice {
	width: 100%;
	height: 42px;
	background-color: #f5f5f5;
}

.main-nav {
	display: inline-block;
}

.main-nav li {
	float: left;
	line-height: 76px;
	padding: 0 20px;
	font-size: 16px;
	font-weight: bold;
	cursor: pointer;
}

.main-nav li:hover {
	color: #5bb2bc;
}

.vice-nav-bar {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: #000;
	color: #fff;
	font-size: 14px;
	box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.vice-nav {
	display: inline-block;
}

.vice-nav li {
	float: left;
	line-height: 42px;
	padding: 0 10px;
	cursor: pointer;
}

.vice-nav li:hover {
	color: #5bb2bc;
}

.vice-adver-area {
	text-align: center;
	line-height: 42px;
	font-size: 16px;
	color: #999;
}

</style>