<template>
	<div class="webview">
		<webview ref="web_view" src="https://www.github.com/" style="width:100% height:100%"></webview>
	</div>
</template>
<script>
export default {
	beforeMount() {
		this.$store.dispatch('setCurrentRoute', '/content');
	},
	mounted() {

	},
	beforeDestroy() {

	},
	destroyed() {

	},

}
</script>

<style>
.webview {
	height: calc(100% - 64px);
}
</style>
