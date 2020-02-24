<template>
  <div>
    <h1>
      {{ albumTitle }}
    </h1>

    <v-card>
      <v-card-text>
        <h2>
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
          <span class="mdi mdi-arrow-right-bold"></span>
        </v-btn>
      </router-link>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SingleAlbum",

  props: {
    artist: {
      type: String,
      required: true
    },

    albumId: {
      type: String,
      required: true
    },

    albumTitle: {
      type: String,
      required: true
    }
  }
};
</script>
