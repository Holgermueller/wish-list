import firebase from "../../firebase/firebaseInit";

export default {
  state: {
    messages: []
  },

  mutations: {
    setMessages(state, payload) {
      if (payload) {
        state.messages = payload;
      } else {
        state.messages = [];
      }
    }
  },

  actions: {
    submitMessage({ commit, getters }, payload) {
      commit("setLoading", true);

      firebase
        .collection("chatMessages")
        .add({
          message: payload.message,
          userId: getters.user.id
        })
        .then(() => {
          commit("setLoading", false);
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
        });
    }
  },

  getters: {
    messages(state) {
      return state.messages;
    }
  }
};
