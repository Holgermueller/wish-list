<template>
  <div>
    <v-card class="list-card-for-single-album">
      <v-card-text>
        <h2 class="display-1 card-text">
          {{ albumTitle }}
        </h2>
        <h3>
          {{ format }}
        </h3>
        <router-link
          :to="{
            name: 'SingleAlbum',
            params: {
              artist: artist,
              albumId: albumId,
              albumTitle: albumTitle
            }
          }"
          ><v-btn class="display-1">
            <span class="mdi mdi-arrow-right-bold"></span>
          </v-btn>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SingleArtistAlbumListCard",

  props: {
    albumTitle: {
      type: String,
      required: true
    },

    format: {
      type: String,
      required: true
    },

    albumId: {
      type: String,
      required: true
    },

    artist: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.list-card-for-single-album:hover {
  background-color: darkgray;
}
a {
  text-decoration: none;
  float: right;
}
</style>
