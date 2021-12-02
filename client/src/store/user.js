export const user = {
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
  mutations: {},
  actions: {},
};
