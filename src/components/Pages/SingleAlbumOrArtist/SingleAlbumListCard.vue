<template>
  <div id="singleAlbumCard">
    <v-card class="album-list-card">
      <v-card-text>
        <h2>
          Artist:
          {{ artist }}
        </h2>
      </v-card-text>
      <router-link
        :to="{
          name: 'SingleArtist',
          params: {
            artist: artist,
            albumId: albumId,
            albumTitle: albumTitle
          }
        }"
      >
        <v-btn class="display-1">
          <span class="mdi mdi-arrow-left-bold"></span>
        </v-btn>
      </router-link>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SingleAlbumCard",

  props: {
    artist: {
      type: String,
      required: true
    },

    albumTitle: {
      type: String,
      required: true
    },

    albumId: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.album-list-card {
}
</style>
