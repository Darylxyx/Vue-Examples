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
	</div>
</template>

<script>

import child from './child.vue';
import layout from './layOut.vue';

export default {
	components: {
		child,
		layout
	}
}

</script>