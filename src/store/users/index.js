import * as firebase from "firebase/app";

export default {
  state: {
    state: {
      user: null
    }
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },

    updateUsername(state, payload) {
      state.user = payload;
    }
  },

  actions: {},

  getters: {
    user(state) {
      return state.user;
    }
  }
};
