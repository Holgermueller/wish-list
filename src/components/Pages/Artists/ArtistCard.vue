<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <v-card
        class="artist-card {'on-hover':hover}"
        :elevation="hover ? 16 : 2"
      >
        <v-card-text class="display-1 card-text">
          {{ artist }}
          <router-link
            :to="{
              name: 'SingleArtist',
              params: { artist: artist, albumId: albumId }
            }"
          >
            <v-btn class="display-1">
              <span class="mdi mdi-arrow-right-bold"></span>
            </v-btn>
          </router-link>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "ArtistCard",

  props: {
    artist: {
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
.artist-card:hover {
  background-color: darkgray;
}
a {
  text-decoration: none;
  float: right;
}
</style>
