<template>
  <div>
    <v-card class="list-card-for-single-album">
      <v-card-title class="display-1 card-text">
        {{ albumTitle }}
      </v-card-title>
      <v-card-text>
        {{ genre }}
        {{ format }}
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>

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
      </v-card-actions>
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
    },

    genre: {
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
