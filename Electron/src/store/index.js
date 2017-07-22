import Vue from 'vue';
import VueX from 'vuex';

import app from './modules/app';
import buzz from './modules/buzz';
import datalab from './modules/datalab';
import entreprenuership from './modules/entreprenuership';
import home from './modules/home';
import pinned from './modules/pinned';
import resource from './modules/resource';
import startup from './modules/startup';


Vue.use(VueX)

export default new VueX.Store({
	modules: {
		app,
		buzz,
		datalab,
		entreprenuership,
		home,
		pinned,
		resource,
		startup
	},
})