<template>
	<div class="container">
		<Sidebar></Sidebar>
		<div :style="[Height]">
			<md-progress md-indeterminate class="md-accent" v-if="IsProgressVisible"></md-progress>
			<div class="content">
				<transition name="md-router" appear>
					<router-view></router-view>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
import Sidebar from './Sidebar.vue';
//event bus
//export const eventBus = new Vue();

export default {
	beforeMount() {

	},
	mounted() {

	},
	beforeDestroy() {

	},
	destroyed() {

	},

	components: {
		Sidebar,
	},

	computed: {
		NavBarTitle() {
			return this.$store.getters.appNavBarTitle;
		},
		IsProgressVisible() {
			return this.$store.getters.appIsProgressVisible;
		},
		IsSidebarOpen() {
			return this.$store.getters.appIsSidebarOpen;
		},
		IsSidebarHidden() {
			return this.$store.getters.appIsSidebarHidden;
		},
		IsBackVisible() {
			return this.isBackVisible();
		},
		IsContentPage() {
			return this.$store.getters.appCurrentRoute == '/content' ? true : false
		},
		Height() {
			if (this.isBackVisible()) {
				return { 'margin-top': '64px' }
			}
			return { 'margin-top': '64px', };
		},
	},
	methods: {
		isBackVisible() {
			const currentRoute = this.$store.getters.appCurrentRoute;
			if (currentRoute == '/setting' || currentRoute == '/content'
				|| currentRoute == '/pinned') {
				return true;
			}
			return false;
		},
	}
}
</script>

<style>
.container {
	display: flex;
	flex: 1;
	flex-direction: column;
}

.content {
	/* max-width: 1100px;
	margin: auto; */
}
</style>
