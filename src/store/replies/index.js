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
    getReplies({ commit }, payload) {
      commit("setLoading", true);

      firebase
        .collection("replies")
        .where("messageId", "==", payload.messageId)
        .orderBy("dateAdded")
        .onSnapshot(
          querySnapshot => {
            let repliesFromDb = [];
            querySnapshot.forEach(doc => {
              let replyData = {
                replyID: doc.id,
                replyForDOM: doc.data().reply,
                messageId: doc.data().messageId
              };
              repliesFromDb.push(replyData);
            });
            commit("setReplies", repliesFromDb);
            commit("setLoading", false);
          },
          err => {
            commit("setLoading", true);
            commit("setError", err);
          }
        );
    },

    replyToMessage({ commit }, payload) {
      commit("setLoading", true);

      firebase
        .collection("replies")
        .add({
          reply: payload.reply,
          dateAdded: new Date(),
          messageId: payload.messageId
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
