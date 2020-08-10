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
        return thisItem.id === payload.id;
      });
      if (payload.notes) {
        thisItemsNotes.notes = payload.newlyEditedNotes;
      }
    },

    UPDATE_ITEM(state, payload) {
      const itemToEdit = state.wishList.find((thisItem) => {
        return thisItem.id === payload.id;
      });
      if (payload.artist) {
        itemToEdit.artist = payload.editedArtist;
      }
      if (payload.title) {
        itemToEdit.title = payload.editedTitle;
      }
      if (payload.medium) {
        itemToEdit.medium = payload.editedMedium;
      }
      if (payload.genre) {
        itemToEdit.genre = payload.editedGenre;
      }
      if (payload.publisher) {
        itemToEdit.publisher = payload.editedPublisher;
      }
    },

    UPDATE_PRIORITY(state, payload) {
      const itemToUpdate = state.wishList.find((thisItem) => {
        return thisItem.id === payload.id;
      });
      if (payload.priority) {
        itemToUpdate.priority = payload.newSelectedPriority;
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
              id: doc.id,
              artist: doc.data().artist,
              title: doc.data().title,
              medium: doc.data().medium,
              genre: doc.data().genre,
              publisher: doc.data().publisher,
              creatorId: doc.data().creatorId,
              priority: doc.data().priority,
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
          priority: payload.selectedPriority,
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

    editEntryInfo({ commit }, payload) {
      commit("SET_LOADING", true);

      firebase
        .collection("wishList")
        .doc(payload.id)
        .update({
          artist: payload.editedArtist,
          title: payload.editedTitle,
          medium: payload.editedMedium,
          genre: payload.editedGenre,
          publisher: payload.editedPublisher,
        })
        .then(() => {
          console.log("item updated!");
          commit("UPDATE_ITEM");
          commit("SET_LOADING", firebase);
        })
        .catch((err) => {
          commit("SET_ERROR", err);
          commit("SET_LOADING", true);
        });
    },

    addLink() {},

    changePriority({ commit }, payload) {
      commit("SET_LOADING", true);

      firebase
        .collection("wishList")
        .doc(payload.id)
        .update({
          priority: payload.newSelectedPriority,
        })
        .then(() => {
          console.log("priority updated");
          commit("SET_LOADING", false);
          commit("UPDATE_PRIORITY");
        })
        .catch((err) => {
          commit("SET_ERROR", err);
          commit("SET_LOADING", true);
        });
    },

    editNotes({ commit }, payload) {
      commit("SET_LOADING", true);

      firebase
        .collection("wishList")
        .doc(payload.id)
        .update({
          notes: payload.newlyEditedNotes,
        })
        .then(() => {
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
        .doc(payload.id)
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
