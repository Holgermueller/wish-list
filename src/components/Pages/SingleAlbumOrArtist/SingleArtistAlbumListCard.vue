<template>
  <div>
    <v-card>
      <v-card-text>
        <h2>
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
a {
  float: right;
  text-decoration: none;
}
</style>
