import firebase from "../../firebase/firebaseInit";

export default {
  state: {
    wishList: [],
  },

  mutations: {
    SET_WISH_LIST(state, payload) {
      state.wishList = payload;
    },

    DELETE_FROM_LIST(state, payload) {
      state.wishList.findIndex((item) => item.id === payload);
    },

    UPDATE_NOTES(state, payload) {
      const thisItemsNotes = state.wishList.find((thisItem) => {
        return thisItem.id === payload.itemId;
      });
      if (payload.newlyEditedNotes) {
        thisItemsNotes.notes = payload.newlyEditedNotes;
      }
    },
  },

  actions: {
    getWishList({ commit }) {
      commit("SET_LOADING", true);

      firebase.collection("wishList").onSnapshot(
        (querySnapshot) => {
          let wishListFromDb = [];
          querySnapshot.forEach((doc) => {
            let listData = {
              itemId: doc.id,
              artist: doc.data().artist,
              title: doc.data().title,
              medium: doc.data().medium,
              genre: doc.data().genre,
              publisher: doc.data().publisher,
              creatorId: doc.data().creatorId,
              selectedPriority: doc.data().selectedPriority,
              notes: doc.data().notes,
            };
            wishListFromDb.push(listData);
          });
          commit("SET_WISH_LIST", wishListFromDb);
          commit("SET_LOADING", false);
        },
        (err) => {
          commit("SET_LOADING", true);
          commit("SET_ERROR", err);
        }
      );
    },

    addEntryToList({ commit, getters }, payload) {
      commit("SET_LOADING", true);

      firebase
        .collection("wishList")
        .add({
          artist: payload.artist,
          title: payload.title,
          medium: payload.medium,
          genre: payload.genre,
          publisher: payload.publisher,
          creatorId: getters.user.userId,
          selectedPriority: payload.selectedPriority,
          notes:
            "Tell people something about this to make finding what you/'re looking for easier for them.",
        })
        .then(() => {
          commit("SET_LOADING", false);
        })
        .catch((err) => {
          commit("SET_LOADING", true);
          commit("SET_ERROR", err);
        });
    },

    editEntryInfo() {},

    addLink() {},

    editNotes({ commit }, payload) {
      commit("SET_LOADING", true);

      firebase
        .collection("wishList")
        .doc(payload.itemId)
        .update({
          notes: payload.newlyEditedNotes,
        })
        .then(() => {
          console.log("note updated!");
          commit("UPDATE_NOTES");
          commit("SET_LOADING", false);
        })
        .catch((err) => {
          commit("SET_ERROR", err);
          commit("SET_LOADING", true);
        });
    },

    removeItemFromList({ commit }, payload) {
      commit("SET_LOADING", true);

      firebase
        .collection("wishList")
        .doc(payload.itemId)
        .delete()
        .then(() => {
          commit("DELETE_FROM_LIST");
          commit("SET_LOADING", false);
        })
        .catch((err) => {
          commit("SET_LOADING", true);
          commit("SET_ERROR", err);
        });
    },
  },

  getters: {
    wishList(state) {
      return state.wishList;
    },
  },
};
