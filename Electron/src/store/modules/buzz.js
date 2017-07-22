const state = {
	buzzItems: [],
};

const mutations = {
	SET_BUZZ_ITEMS: (state, payload) => {
		state.buzzItems = payload.slice();
	},
}

const actions = {
	setBuzzItems({ commit }, payload) {
		commit('SET_BUZZ_ITEMS', payload);
	},
}

const getters = {
	buzzItems: state => state.buzzItems,
}

export default {
	state,
	mutations,
	actions,
	getters
};