const state = {
	resourceItems: [],
};

const mutations = {
	SET_RESOURCE_ITEMS: (state, payload) => {
		state.resourceItems = payload.slice();
	},
}

const actions = {
	setResourceItems({ commit }, payload) {
		commit('SET_RESOURCE_ITEMS', payload);
	},
}

const getters = {
	resourceItems: state => state.resourceItems,
}

export default {
	state,
	mutations,
	actions,
	getters
};