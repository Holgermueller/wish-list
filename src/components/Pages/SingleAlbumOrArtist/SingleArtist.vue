<template>
  <div>
    <h1>
      {{ artist }}
    </h1>

    <v-card>
      <v-card-text>
        <h2>
          {{ albumTitle }}
        </h2>
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
  name: "SingleArtist",

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
