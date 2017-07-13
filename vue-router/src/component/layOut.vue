<template>
	<div class='lay-out'>
		<header>
			<slot name='header'></slot>
		</header>
		<footer>
			<slot name='footer'></slot>
		</footer>
		<slot></slot>
	</div>
</template>