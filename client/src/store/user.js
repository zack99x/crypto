export const user = {
  namespaced: true,
  state: () => ({
    data: {
      username: "",
      email: "",
      role: "",
    },
    session: {
      logged: false,
      token: "",
    },
  }),
  getters: {
    session: (state) => {
      return state.session;
    },
    userData: (state) => {
      return state.data;
    },
  },
  mutations: {
    setUserData(state, userData) {
      state.data = userData;
    },
    setSession(state, sessionData) {
      state.session = sessionData;
      localStorage.setItem("jwt-token", sessionData.token);
    },
  },
  actions: {
    login({ commit }, payload) {
      const { username, email, token } = payload;

      commit("setUserData", { username, email });
      commit("setSession", { logged: true, token });
    },

    logout({ commit }) {
      commit("setSession", { logged: false, token: "" });
    },
  },
};
