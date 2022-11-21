export default {
    namespaced: true,
    state: {
        loading: false,
    },
    getters: {
        getLoading(state) {
            return state.loading;
        }
    },
    actions: {
        setLoading({commit}, loading) {
            commit('updateLoading', loading);
        }
    },
    mutations: {
        updateLoading(state, loading) {
            state.loading = loading;
        }
    },
};
