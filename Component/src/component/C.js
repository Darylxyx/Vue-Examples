const cc = {
	template: `<h1 @click.stop="propsEvent">{{text}}</h1>`,
	data() {
		return {
			text: 'c-component-msg'
		}
	},
	props: ['propsEvent']
};

export default cc;