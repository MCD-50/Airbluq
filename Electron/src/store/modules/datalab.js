const state = {
	datalabItems: [],
};

const mutations = {
	SET_DATALAB_ITEMS: (state, payload) => {
		state.datalabItems = payload.slice();
	},
}

const actions = {
	setDatalabItems({ commit }, payload) {
		commit('SET_DATALAB_ITEMS', payload);
	},
}

const getters = {
	datalabItems: state => state.datalabItems,
}

export default {
	state,
	mutations,
	actions,
	getters
};