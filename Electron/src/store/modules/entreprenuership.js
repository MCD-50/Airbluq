const state = {
	entreprenuershipItems: [],
};

const mutations = {
	SET_ENTERPRENUERSHIP_ITEMS: (state, payload) => {
		state.entreprenuershipItems = payload.slice();
	},
}

const actions = {
	setEntreprenuershipItems({ commit }, payload) {
		commit('SET_ENTERPRENUERSHIP_ITEMS', payload);
	},
}

const getters = {
	entreprenuershipItems: state => state.entreprenuershipItems,
}

export default {
	state,
	mutations,
	actions,
	getters
};