const state = {
	pinnedItems: [],
};

const mutations = {
	SET_PINNED_ITEMS: (state, payload) => {
		state.pinnedItems = payload.slice();
	},
}

const actions = {
	setPinnedItems({ commit }, payload) {
		commit('SET_PINNED_ITEMS', payload);
	},
}

const getters = {
	pinnedItems: state => state.pinnedItems,
}

export default {
	state,
	mutations,
	actions,
	getters
};