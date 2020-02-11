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
    getAlbumsFromDb({ commit, getters }) {
      commit("setLoading", true);

      firebase
        .collection("albums")
        .where("userId", "==", getters.user.id)
        .orderBy("dateAdded")
        .onSnapshot(querySnapshot => {
          let albumsFromDB = [];
          querySnapshot.forEach(doc => {
            let albumData = {
              albumId: doc.id,
              artist: doc.data().artist,
              albumTitle: doc.data().albumTitle,
              genre: doc.data().genre,
              format: doc.data().format
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

    addAlbum({ commit, getters }, payload) {
      commit("setLoading", true);

      firebase
        .collection("albums")
        .add({
          userId: getters.user.id,
          artist: payload.artist,
          albumTitle: payload.albumTitle,
          genre: payload.genre,
          format: payload.format,
          dateAdded: new Date()
        })
        .then(() => {
          commit("setLoading", false);
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
        });
    }
  },

  getters: {
    albums(state) {
      return state.albums;
    }
  }
};
