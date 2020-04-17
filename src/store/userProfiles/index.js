import firebase from "../../firebase/firebaseInit";

export default {
  state: {
    userProfile: null,
  },

  mutations: {
    setUserProfile(state, payload) {
      state.userProfile = payload;
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
    },
  },

  actions: {
    getUserProfileFromDB({ commit, getters }) {
      commit("setLoading", true);

      firebase
        .collection("userProfiles")
        .where("userId", "==", getters.user.userId)
        .onSnapshot(
          (querySnapshot) => {
            let userProfileFromDb = [];
            querySnapshot.forEach((doc) => {
              let userData = {
                docId: doc.id,
                displayName: doc.data().displayName,
                email: doc.data().email,
                userId: doc.data().userId,
                bio: doc.data().bio,
              };
              userProfileFromDb.push(userData);
            });
            commit("setUserProfile", userProfileFromDb);
            commit("setLoading", false);
          },
          (err) => {
            commit("setLoading", true);
            commit("setError", err);
          }
        );
    },

    editUserProfile({ commit }, payload) {
      commit("setLoading", true);

      firebase
        .collection("userProfiles")
        .doc(payload.userId)
        .update({
          displayName: payload.displayName,
          email: payload.email,
          bio: payload.bio,
        })
        .then(() => {
          commit("updateUserInfo");
          commit("setLoading", false);
        })
        .catch((err) => {
          commit("setLoading", true);
          commit("setError", err);
        });
    },
  },

  getters: {
    userProfileInfo(state) {
      return state.userProfile;
    },
  },
};
