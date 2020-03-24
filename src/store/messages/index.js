import firebase from "../../firebase/firebaseInit";

export default {
  state: {
    messages: [],
    replies: []
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
    getMessages({ commit }) {
      firebase
        .collection("chatMessages")
        .orderBy("dateAdded", "desc")
        .onSnapshot(
          querySnapshot => {
            let messagesFromDb = [];
            querySnapshot.forEach(doc => {
              let messagesData = {
                messageId: doc.id,
                message: doc.data().message
              };
              messagesFromDb.push(messagesData);
            });
            commit("setMessages", messagesFromDb);
            commit("setLoading", false);
          },
          err => {
            commit("setLoading", true);
            commit("setError", err);
          }
        );
    },

    submitMessage({ commit }, payload) {
      commit("setLoading", true);

      firebase
        .collection("chatMessages")
        .add({
          message: payload.message,
          dateAdded: new Date()
          //userId: getters.user.id
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
