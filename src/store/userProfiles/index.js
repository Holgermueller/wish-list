import firebase from "../../firebase/firebaseInit";

export default {
  state: {
    userDisplayInfo: []
  },

  mutations: {
    setUserDisplayInfo(state, payload) {
      state.userDisplayInfo = payload;
    },

    updateUserInfo(state, payload) {
      if (payload.displayName) {
        state.displayName = payload.displayName;
      }
      if (payload.email) {
        state.email = payload.email;
      }
      if (payload.bio) {
        state.bio = payload.bio;
      }
    }
  },

  actions: {
    getUserProfileFromDB({ commit }) {
      commit("setLoading", true);

      firebase.collection("users").onSnapshot(
        querySnapshot => {
          let userInfoFromDb = [];
          querySnapshot.forEach(doc => {
            let userData = {
              idNotUsed: doc.id,
              displayName: doc.data().displayName,
              email: doc.data().email,
              bio: doc.data().bio,
              userId: doc.data().userId
            };
            userInfoFromDb.push(userData);
          });
          commit("setUserDisplayInfo", userInfoFromDb);
          commit("setLoading", false);
        },
        err => {
          commit("setLoading", true);
          commit("setError", err);
        }
      );
    },

    editUserProfile({ commit }, payload) {
      commit("setLoading", true);

      firebase
        .collection("users")
        .doc(payload.uid)
        .update({
          displayName: payload.displayName,
          email: payload.email,
          bio: payload.bio
        })
        .then(() => {
          commit("updateUserInfo");
          commit("setLoading", false);
        })
        .catch(err => {
          commit("setLoading", true);
          commit("setError", err);
        });
    }
  },

  getters: {
    userDisplayInfo(state) {
      return state.userDisplayInfo;
    }
  }
};
