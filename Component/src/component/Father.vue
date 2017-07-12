<template>
	<div class='father'>
		<h1>父组件标题</h1>
		<child>
			<p>子组件内容</p>
			<p>子组件更多内容</p>
		</child>
		<br/>
		<h1>layout 父组件标题</h1>
		<layout>
			<p>layout 内容1</p>
			<h2 slot='header'>layout 组件标题</h2>
			<p>layout 内容2</p>
			<h2 slot='footer'>layout 页脚</h2>
			<p>layout 内容3</p>
		</layout>
		<prop :list='list'>
			<template scope='props'>
				<li class='my-list-style'>{{props.text}}</li>
			</template>
		</prop>
		<button @click='toggleComponent'>切换组件</button>
		<keep-alive>
			<component :is='currentView'></component>
		</keep-alive>
	</div>
</template>

<script>

import child from './child.vue';
import layout from './layOut.vue';
import prop from './prop.vue';
import conRed from './component1.vue';
import conYellow from './component2.vue';

export default {
	data() {
		return {
			currentView: 'conRed',
			list: ['list-1', 'list-2', 'list-3', 'list-4', 'list-5']
		}
	},
	components: {
		child,
		layout,
		prop,
		conRed,
		conYellow
	},
	methods: {
		toggleComponent() {
			this.currentView == 'conRed' ? this.currentView = 'conYellow' : this.currentView = 'conRed';
		}
	}
}

</script>

<style>
.my-list-style {
	color: red;
}
</style>