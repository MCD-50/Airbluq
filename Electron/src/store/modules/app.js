
const state = {
	currentRoute: '/base',
	heroImageUrl: '',
	navBarTitle: 'Home',
	isSidebarOpen: false,
	isSidebarHidden: false,
	isProgressVisible: false,
	translate3D: true,
}

const mutations = {
	SET_CURRENT_ROUTE(state, payload) {
		state.currentRoute = payload;
	},
	SET_HERO_IMAGE_URL(state, payload) {
		state.heroImageUrl = payload;
	},
	SET_NAVBAR_TITLE(state, payload) {
		state.navBarTitle = payload;
	},
	SET_IS_SIDEBAR_OPEN(state, payload) {
		state.isSidebarOpen = payload;
	},
	SET_IS_PROGRESS_VISIBLE(state, payload) {
		state.isProgressVisible = payload;
	},
	SET_IS_SIDEBAR_HIDDEN(state, payload) {
		state.isSidebarHidden = payload;
	},
	SET_TRASLATE3D(state, payload) {
		state.translate3D = payload;
	},
}

const actions = {
	setCurrentRoute({ commit }, payload) {
		commit('SET_CURRENT_ROUTE', payload);
	},
	setHeroImageUrl({ commit }, payload) {
		commit('SET_HERO_IMAGE_URL', payload);
	},
	setNavbarTitle({ commit }, payload) {
		commit('SET_NAVBAR_TITLE', payload);
	},
	setIsSidebarOpen({ commit }, payload) {
		commit('SET_IS_SIDEBAR_OPEN', payload);
	},
	setIsProgressVisible({ commit }, payload) {
		commit('SET_IS_PROGRESS_VISIBLE', payload);
	},
	setIsSidebarHidden({ commit }, payload) {
		commit('SET_IS_SIDEBAR_HIDDEN', payload);
	},
	setTranslate3d({ commit }, payload) {
		commit('SET_TRASLATE3D', payload);
	},
}

const getters = {
	appCurrentRoute: state => state.currentRoute,
	appHeroImageUrl: state => state.heroImageUrl,
	appNavBarTitle: state => state.navBarTitle,
	appIsSidebarOpen: state => state.isSidebarOpen,
	appIsProgressVisible: state => state.isProgressVisible,
	appIsSidebarHidden: state => state.isSidebarHidden,
	appTranslate3D: state => state.translate3D
}


export default {
	state,
	mutations,
	actions,
	getters
}