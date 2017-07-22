const state = {
	homeItems: [],
};

const mutations = {
	SET_HOME_ITEMS: (state, payload) => {
		state.homeItems = payload.slice();
	},
}

const actions = {
	setHomeItems({ commit }, payload) {
		commit('SET_HOME_ITEMS', payload);
	},
}

const getters = {
	homeItems: state => state.homeItems,
}

export default {
	state,
	mutations,
	actions,
	getters
};