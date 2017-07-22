import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
	base: __dirname,
	routes: [
		{
			path: '*',
			redirect: '/base',
			meta: {
				auth: false
			}
		},
		{
			name: 'Setting',
			path: '/setting',
			meta: {
				auth: false
			},
			component: require('../components/views/Setting.vue')
		},
		{
			name: 'Pinned',
			path: '/pinned',
			meta: {
				auth: false
			},
			component: require('../components/views/Pinned.vue')
		},
		{
			name: 'Content',
			path: '/content',
			meta: {
				auth: false
			},
			component: require('../components/views/Content.vue')
		},
		...getSidebarRoutes(),
	]
});

function getSidebarRoutes(menu = [], routes = [], isBaseRouting = true) {
	if (menu.length < 1 && isBaseRouting) {
		const { sideBarItems } = require('../util');
		menu = sideBarItems.items || [];
	}

	for (let i = 0, l = menu.length; i < l; i++) {
		const item = menu[i]
		if (item.path) {
			routes.push(item);
		}
		if (!item.component) {
			getSidebarRoutes(item.children, routes, false);
		}
	}
	return routes
}