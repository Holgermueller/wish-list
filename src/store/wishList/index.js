import firebase from "../../firebase/firebaseInit";

export default {
  state: {
    wishList: [
      {
        itemId: "xxx",
        artist: "doc.data().artist",
      },
      {
        itemId: "xxx",
        artist: "doc.data().artist",
      },
      {
        itemId: "xxx",
        artist: "doc.data().artist",
      },
    ],
  },

  mutations: {
    setWishList(state, payload) {
      if (payload) {
        state.wishList = payload;
      } else {
        state.wishList = "[Wish List will appear here]";
      }
    },
  },

  actions: {
    getWishList({ commit }) {
      commit(["setLoading", true]);

      firebase.collection("wishList").onSnapshot(
        (querySnapshot) => {
          let wishListFromDB = [];
          querySnapshot.forEach((doc) => {
            let wishListData = {
              itemId: doc.id,
              artist: doc.data().artist,
            };
            wishListFromDB.push(wishListData);
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

    addEntryToList({ commit, getters }, payload) {
      commit("setLoading", true);

      firebase
        .collection("wishList")
        .add({ artist: payload.artist, creatorId: getters.user.userId })
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
