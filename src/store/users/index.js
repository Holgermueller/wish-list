import * as firebase from "firebase/app";

export default {
  state: {
    user: null
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },

    updateUsername(state, payload) {
      state.user = payload;
    }
  },

  actions: {
    registerUser({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");

      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(userCredential => {
          const userToUpdate = firebase.auth().currentUser;
          userToUpdate
            .updateProfile({
              displayName: payload.displayName
            })
            .then(() => {
              commit("setLoading", false);
            })
            .catch(err => {
              commit("setLoading", false);
              commit("setError", err);
            });

          const user = userCredential.user;
          const newUser = {
            displayName: user.displayName,
            email: user.email,
            id: user.id
          };

          commit("setUser", newUser);
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
        });
    },

    login({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");

      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          firebase
            .collection("users")
            .add({
              displayName: payload.displayName,
              id: user.user.uid
            })
            .then(() => {
              commit("setLoading", false);
            })
            .catch(err => {
              commit("setLoading", false);
              commit("setError", err);
            });

          commit("setLoading", false);
          const signedInUser = {
            email: user.user.email,
            id: user.user.uid,
            displayName: user.user.displayName
          };
          commit("setLoading", false);
          commit("setUser", signedInUser);
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
        });
    },

    autoSignIn({ commit }, payload) {
      commit("setLoading", false);
      commit("setUser", {
        id: payload.id,
        email: payload.email,
        displayName: payload.displayName
      });

      // firebase
      //   .auth()
      //   .currentUser.reauthenticateWithCredential(credential)
      //   .then(() => {
      //     commit("setLoading", false);
      //     commit("setUser", {
      //       id: payload.uid,
      //       email: payload.email,
      //       displayName: payload.displayName
      //     });
      //   })
      //   .catch(err => {
      //     commit("setLoading", false);
      //     commit("setError", err);
      //   });
    },

    deleteUser({ commit }) {
      commit("setLoading", true);

      firebase
        .auth()
        .currentUser.delete()
        .then(() => {
          commit("setLoading", false);
          commit("setUser", null);
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
        });
    },

    logout({ commit }) {
      commit("setLoading", true);

      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setLoading", false);
          commit("setUser", null);
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
        });
    }
  },

  getters: {
    user(state) {
      return state.user;
    }
  }
};
