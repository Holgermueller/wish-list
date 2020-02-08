import firebase from "../../firebase/firebaseInit";

export default {
  state: {
    albums: []
  },

  mutations: {
    setAlbumsList(state, payload) {
      if (payload) {
        state.albums = payload;
      } else {
        state.albums = [];
      }
    }
  },

  actions: {
    getAlbumsFromDb({ commit }) {
      firebase.collection("albums").onSnapshot(querySnapshot => {
        let albumsFromDB = [];
        querySnapshot.forEach(doc => {
          let albumData = {
            albumId: doc.id,
            albumTitle: doc.data().albumTitle
          };
          albumsFromDB.push(albumData);
        });
        commit("setAlbumsList", albumsFromDB);
        commit("setLoading", false);
      }),
        err => {
          commit("setLoading", true);
          commit("setError", err);
        };
    },

    addAlbum({ commit, getters }, payload) {}
  },

  getters: {
    albums(state) {
      return state.albums;
    }
  }
};
