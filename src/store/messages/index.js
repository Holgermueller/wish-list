import firebase from "../../firebase/firebaseInit";

export default {
  state: {
    messages: [],
  },

  mutations: {
    setMessages(state, payload) {
      if (payload) {
        state.messages = payload;
      } else {
        state.messages = [];
      }
    },

    updateLikes(state, payload) {
      const thisMessagesLikes = state.messages.find((thisMessage) => {
        return thisMessage.id === payload.messageId;
      });
      if (payload.likes) {
        thisMessagesLikes.likes = payload.likes++;
      }
    },
  },

  actions: {
    getMessages({ commit }) {
      commit("setLoading", true);

      firebase
        .collection("chatMessages")
        .orderBy("dateAdded", "desc")
        .onSnapshot(
          (querySnapshot) => {
            let messagesFromDb = [];
            querySnapshot.forEach((doc) => {
              let messagesData = {
                messageId: doc.id,
                message: doc.data().message,
                dateAdded: doc.data().dateAdded,
                displayNameOfPoster: doc.data().displayName,
                likes: doc.data().likes,
              };
              messagesFromDb.push(messagesData);
            });
            commit("setMessages", messagesFromDb);
            commit("setLoading", false);
          },
          (err) => {
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
          (querySnapshot) => {
            let thisUsersMessages = [];
            querySnapshot.forEach((doc) => {
              let usersMessages = {
                messageId: doc.id,
                message: doc.data().message,
                dateAdded: doc.data().dateAdded,
                displayNameOfPoster: doc.data().displayName,
                likes: doc.data().likes,
              };
              thisUsersMessages.push(usersMessages);
            });
            commit("setMessages", thisUsersMessages);
            commit("setLoading", false);
          },
          (err) => {
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
          likes: 0,
        })
        .then(() => {
          commit("setLoading", false);
        })
        .catch((err) => {
          commit("setLoading", false);
          commit("setError", err);
        });
    },

    incrementLikes({ commit }, payload) {
      firebase
        .collection("chatMessages")
        .doc(payload.messageId)
        .update({
          likes: payload.incrementedLikes,
        })
        .then(() => {
          commit("updateLikes");
        })
        .catch((err) => {
          commit("setError", err);
        });
    },
  },

  getters: {
    messages(state) {
      return state.messages;
    },
  },
};
