import firebase from "../../firebase/firebaseInit";

export default {
  state: {
    replies: [],
  },

  mutations: {
    setReplies(state, payload) {
      if (payload) {
        state.replies = payload;
      } else {
        state.replies = [];
      }
    },

    addLikesToReplies(state, payload) {
      const thisReplysLikes = state.message.find((thisReply) => {
        return thisReply.id === payload.replyId;
      });
      if (payload.likes) {
        thisReplysLikes.likes = payload.likes++;
      }
    },
  },

  actions: {
    getReplies({ commit }, payload) {
      commit("setLoading", true);

      firebase
        .collection("replies")
        .where("messageId", "==", payload.messageId)
        .orderBy("dateAdded", "desc")
        .onSnapshot(
          (querySnapshot) => {
            let repliesFromDb = [];
            querySnapshot.forEach((doc) => {
              let replyData = {
                replyId: doc.id,
                replyForDOM: doc.data().reply,
                messageId: doc.data().messageId,
                dateAdded: doc.data().dateAdded,
                replierName: doc.data().replierName,
                likes: doc.data().likes,
              };
              repliesFromDb.push(replyData);
            });
            commit("setReplies", repliesFromDb);
            commit("setLoading", false);
          },
          (err) => {
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
          messageId: payload.messageId,
          replierName: payload.replierName,
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
        .collection("replies")
        .doc(payload.replyId)
        .update({ likes: payload.incrementLikes })
        .then(() => {
          commit("addLikesToReplies");
        })
        .catch((err) => {
          commit("setError", err);
        });
    },
  },

  getters: {
    replies(state) {
      return state.replies;
    },
  },
};
