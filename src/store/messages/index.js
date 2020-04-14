import firebase from "../../firebase/firebaseInit";

export default {
  state: {
    messages: []
  },

  mutations: {
    setMessages(state, payload) {
      state.messages = payload;
    },

    updateLikes(state, payload) {
      const thisMessagesLikes = state.messages.find(thisMessage => {
        return thisMessage.id === payload.messageId;
      });
      if (payload.likes) {
        thisMessagesLikes.likes = payload.likes;
      }
    },

    editMessage(state, payload) {
      const message = state.messages.find(message => {
        return message.id === payload.messageId;
      });

      if (payload.message) {
        message.message = payload.edittedMessage;
      }
    },

    deleteMessage(state, payload) {
      state.messages.findIndex(message => message.id === payload);
    }
  },

  actions: {
    getMessages({ commit }) {
      commit("setLoading", true);

      firebase
        .collection("chatMessages")
        .orderBy("dateAdded", "desc")
        .onSnapshot(
          querySnapshot => {
            let messagesFromDb = [];
            querySnapshot.forEach(doc => {
              let messagesData = {
                messageId: doc.id,
                message: doc.data().message,
                dateAdded: doc.data().dateAdded,
                displayNameOfPoster: doc.data().displayName,
                likes: doc.data().likes
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

    getMessagesForSingleUser({ commit, getters }) {
      commit("setLoading", true);

      firebase
        .collection("chatMessages")
        .where("displayName", "==", getters.user.displayName)
        .orderBy("dateAdded", "desc")
        .onSnapshot(
          querySnapshot => {
            let thisUsersMessages = [];
            querySnapshot.forEach(doc => {
              let usersMessages = {
                messageId: doc.id,
                message: doc.data().message,
                dateAdded: doc.data().dateAdded,
                displayNameOfPoster: doc.data().displayName,
                likes: doc.data().likes
              };
              thisUsersMessages.push(usersMessages);
            });
            commit("setMessages", thisUsersMessages);
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
          dateAdded: new Date(),
          displayName: payload.displayName,
          userIdOfPoster: payload.userIdOfPoster,
          likes: 0
        })
        .then(() => {
          commit("setLoading", false);
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
        });
    },

    updateLikes({ commit }, payload) {
      firebase
        .collection("chatMessages")
        .doc(payload.messageId)
        .update({
          likes: payload.incrementedLikes
        })
        .then(() => {
          commit("updateLikes");
        })
        .catch(err => {
          commit("setError", err);
        });
    },

    editMessage({ commit }, payload) {
      commit("setLoading", true);

      firebase
        .collection("chatMessages")
        .doc(payload.messageId)
        .update({
          message: payload.edittedMessage
        })
        .then(() => {
          commit("editMessage");
        })
        .catch(err => {
          commit("setError", err);
        });
    },

    deleteMessage({ commit }, payload) {
      commit("setLoading", true);

      firebase
        .collection("chatMessages")
        .doc(payload.messageId)
        .delete()
        .then(() => {
          commit("deleteMessage");
        })
        .catch(err => {
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
