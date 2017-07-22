const state = {
    startupItems: [],
};

const mutations = {
    SET_STARTUP_ITEMS: (state, payload) => {
        state.startupItems = payload.slice();
    },
}

const actions = {
    setStartupItems({ commit }, payload) {
        commit('SET_STARTUP_ITEMS', payload);
    },
}

const getters = {
    startupItems: state => state.startupItems,
}

export default {
    state,
    mutations,
    actions,
    getters
};