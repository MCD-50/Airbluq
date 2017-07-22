<template>
	<div>
		<md-toolbar class="navbar">
			<div class="md-toolbar-container">
				<md-button class="md-icon-button" v-if="!IsBackVisible" @click="toggleLeftSidenav">
					<md-icon>menu</md-icon>
				</md-button>
	
				<md-button class="md-icon-button" v-if="IsBackVisible" @click="onBackClick">
					<md-icon>arrow_back</md-icon>
				</md-button>
	
				<h2 class="md-title" style="margin-left:0px">{{NavBarTitle}}</h2>
				<span style="flex: 1;"></span>
	
				<md-button class="md-icon-button" v-if="!IsBackVisible" @click="onPinnedClick">
					<md-icon>hdr_strong</md-icon>
				</md-button>
	
				<md-button class="md-icon-button" v-if="IsContentPage" @click="onSettingClick">
					<md-icon>favorite</md-icon>
				</md-button>
	
				<md-button class="md-icon-button" v-if="IsContentPage" @click="onSettingClick">
					<md-icon>favorite_border</md-icon>
				</md-button>
	
				<md-button class="md-icon-button" v-if="!IsBackVisible" @click="onSettingClick">
					<md-icon>settings</md-icon>
				</md-button>
			</div>
		</md-toolbar>
	
		<md-sidenav md-fixed class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
			<md-toolbar class="md-large" />
			<md-toolbar>
				<span class="md-title">Airbluq</span>
			</md-toolbar>
	
			<md-list>
				<md-list-item v-for="(item, index) in Items" :key="index" @click="(e)=>clickRoute(e, item)">
					<md-icon v-if="item.meta.icon">{{item.meta.icon}}</md-icon>
					<span>{{item.name}}</span>
					<md-list-expand v-if="item.children">
						<md-list v-for="(subItem, subIndex) in item.children" :key="subIndex">
							<md-list-item class="md-inset" @click="(e)=>clickRoute(e, subItem)">{{subItem.name}}</md-list-item>
						</md-list>
					</md-list-expand>
				</md-list-item>
			</md-list>
		</md-sidenav>
	
	</div>
</template>

<script>
import Vue from 'vue';
import { sideBarItems } from '../util/index';
export default {

	beforeMount() {

	},
	mounted() {

	},
	beforeDestroy() {

	},
	destroyed() {

	},

	computed: {
		NavBarTitle() {
			return this.$store.getters.appNavBarTitle;
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
				return { 'height': '64px' }
			}
			return { 'height': '144px', };
		},
		HeroImage() {
			const appHeroImageUrl = this.$store.getters.appHeroImageUrl
			if (appHeroImageUrl != '') {
				return {
					'background': `url("${appHeroImageUrl}") no-repeat`,
					'background-size': '100%'
				}
			} else {
				return { 'background-size': '100%' };
			}
			return this.$store.getters.appHeroImageUrl;
		},
		Items() {
			return sideBarItems.items;
		},
	},
	methods: {
		//nav bar toggle events
		toggleLeftSidenav() {
			this.$refs.leftSidenav.toggle();
		},
		open(ref) {
			console.log('Opened: ' + ref);
		},
		close(ref) {
			console.log('Closed: ' + ref);
		},
		isBackVisible() {
			const currentRoute = this.$store.getters.appCurrentRoute;
			if (currentRoute == '/setting' || currentRoute == '/content'
				|| currentRoute == '/pinned') {
				return true;
			}
			return false;
		},
		onSettingClick(e) {
			this.$store.dispatch('setIsProgressVisible', false);
			this.$router.push({ path: '/setting', name: 'Setting' });
		},
		onBackClick(e) {
			this.$store.dispatch('setIsProgressVisible', false);
			this.$router.back();
		},
		onPinnedClick(e) {
			this.$store.dispatch('setIsProgressVisible', false);
			this.$router.push({ path: '/pinned', name: 'Pinned' });
		},
		clickRoute(e, item) {
			if (item.children == undefined) {
				this.$store.dispatch('setIsProgressVisible', true);
				this.$router.push({ path: item.path, name: item.name });
				this.toggleLeftSidenav();
			}
		},
	}
}

</script>

<style>
.navbar {
	overflow: hidden;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 100;
	border-top: 0;
}
</style>

