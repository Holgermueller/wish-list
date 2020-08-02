import * as firebase from "firebase/app";

export default {
  state: {
    wishList: [],
  },

  mutations: {
    setWishList(state, payload) {
      if (payload) {
        state.wishList = payload;
      } else {
        state.wishList = [];
      }
    },
  },

  actions: {
    getTheList({ commit }) {
      commit(["setLoading", true]);

      firebase.collection("wishList").onSnapshot(
        (querySnapshot) => {
          let wishListFromDB = [];
          querySnapshot.forEach((doc) => {
            let listData = {
              itemId: doc.id,
              artist: doc.data().artist,
            };
            wishListFromDB.push(listData);
          });
          commit("setWishList", wishListFromDB);
          commit("setLoading", false);
        },
        (err) => {
          commit("setLoading", true);
          commit("setError", err);
        }
      );
    },

    addEntryToList({ commit }, payload) {
      commit("setLoading", true);

      firebase
        .collection("wishList")
        .add({ artist: payload.artist })
        .then(() => {
          console.log("Item added to list!");
          commit("setLoading", false);
        })
        .catch((err) => {
          commit("setLoading", true);
          commit("setError", err);
        });
    },
  },

  getters: {
    wishList(state) {
      return state.wishList;
    },
  },
};
