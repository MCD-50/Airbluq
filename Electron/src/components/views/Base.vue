<template>
	<div class="item-container">
		<md-card class="base-item" v-for="(item, index) in Items" :key="index">
			<md-card-media style="height:216px; overflow:hidden;">
				<img :src="item.bigImage" alt="Airbluq">
			</md-card-media>
			<md-card-header style="height:149px; overflow:hidden;">
				<div class="md-subhead"> {{item.postTime}} </div>
				<div class="md-title"> {{item.title}} </div>
			</md-card-header>
			<md-card-content style="height:60px; overflow:hidden;">
				{{item.title}}
			</md-card-content>
			<md-card-actions style="margin-bottom:5px; height:60px; overflow:hidden;">
				<md-button @click="(e)=> onCardClick(e, item)">View</md-button>
			</md-card-actions>
		</md-card>
		<md-dialog-confirm :md-title="error.title" :md-content-html="error.message" :md-ok-text="error.okText" :md-cancel-text="error.cancelText" @open="onOpen" @close="onClose" ref="confirm_dailog">
		</md-dialog-confirm>
	</div>
</template>
<script>
import { makeRequest } from '../../helper/Internet';

export default {

	beforeMount() {
		this.$store.dispatch('setCurrentRoute', '/base');
	},
	mounted() {
		if (this.payload.items.length < 1) {
			this.sendRequest();
		}

	},
	beforeDestroy() {

	},
	destroyed() {

	},
	data() {
		return {
			payload: {
				items: [],
			},
			helper: {
				isLoading: false,
				page: 1
			},
			constant: {
				methodName: 'searchBase'
			},
			error: {
				title: 'Something went wrong.',
				message: 'An error occured while sending your request to the server. Make sure you have active internet connection or try again.',
				okText: 'OK',
				cancelText: 'CANCEL'
			}
		}
	},

	computed: {
		Items() {
			if (this.payload.items.length > 0) {
				return this.payload.items;
			}
			return this.$store.getters.homeItems;
		},
	},

	methods: {
		openDialog() {
			this.$refs.confirm_dailog.open();
		},
		closeDialog() {
			this.$refs.confirm_dailog.close();
		},
		onOpen() {

		},
		onClose(type) {

		},
		onCardClick(e, item) {
			this.$router.push({ path: './content', name: 'Content', params: { item: item } });
		},
		sendRequest() {
			this.$store.dispatch('setIsProgressVisible', true);
			makeRequest(this.constant.methodName, this.helper.page)
				.then(res => {
					if (res && res.data && res.data.items) {
						const items = res.data.items.slice();
						const heroImage = items.length > 0 ? items[0].bigImage : '';
						this.payload.items = items;

						this.$store.dispatch('setHomeItems', items);
						this.$store.dispatch('setHeroImageUrl', heroImage);
					}
					this.$store.dispatch('setIsProgressVisible', false);
				}).catch(rej => {
					this.$store.dispatch('setIsProgressVisible', false);
					this.openDialog();
				})
		},

	}

}
</script>

<style>
.item-container {
	display: flex;
	flex: 1;
	padding-top: 1em;
	margin-left: 1em;
	margin-right: 1em;
	flex-wrap: wrap;
}

.base-item {
	width: 33%;
	margin: 1px;
	height: 490px;
	overflow: hidden;
}

</style>
