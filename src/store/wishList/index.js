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
        .add({ artist: payload.artist, creatorId: getters.user.userId })
        .then(() => {
          commit("SET_LOADING", false);
        })
        .catch((err) => {
          commit("SET_LOADING", true);
          commit("SET_ERROR", err);
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
