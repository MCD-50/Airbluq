import Vue from 'vue'
import App from './components/App.vue';
import store from './store';
import router from './route';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAuth from '@websanova/vue-auth'

import VueMaterial from 'vue-material'
import '../node_modules/vue-material/dist/vue-material.css';

Vue.use(VueMaterial)

// Vue.material.registerTheme({
// 	app: {
// 		primary: 'cyan'
// 	},
// 	about: {
// 		primary: 'indigo'
// 	},
// 	contact: {
// 		primary: 'teal'
// 	}
// })
//define this before using vue-auth
Vue.router = router

// Vue.use(VueAxios, axios)
// Vue.use(VueAuth, {
// 	auth: {
// 		request: function (req, token) {
// 			console.log(token);
// 			this.options.http._setHeaders.call(this, req, { Authorization: 'Bearer ' + token })
// 		},
// 		response: (res) => {
// 			return res
// 		}
// 	},
// 	http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
// 	router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
// 	loginData: { url: 'http://localhost:3000/loginapi', fetchUser: false },
// 	refreshData: { enabled: false },
// 	fetchData: { url: 'http://localhost:3000/auth/userDeatils', method: 'GET', enabled: false }
// })

// Enable devtools
Vue.config.devtools = true
new Vue({
	el: '#app',
	store: store,
	router: router,
	render: render => render(App)
})