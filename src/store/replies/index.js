import firebase from "../../firebase/firebaseInit";

export default {
  state: {
    replies: []
  },

  mutations: {
    setReplies(state, payload) {
      if (payload) {
        state.replies = payload;
      } else {
        state.replies = [];
      }
    }
  },

  actions: {
    replyToMessage({ commit }, payload) {
      commit("setLoading", true);

      firebase
        .collection("chatMessages")
        .doc(payload.originalMessageId)
        .collection("replies")
        .add({
          reply: payload.reply,
          dateAdded: new Date(),
          originalMessageId: payload.originalMessageId
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
    replies(state) {
      return state.replies;
    }
  }
};
