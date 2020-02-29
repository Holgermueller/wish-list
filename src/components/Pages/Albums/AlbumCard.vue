<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <v-card
        class="albums-card {'on-hover':hover}"
        :elevation="hover ? 16 : 2"
      >
        <v-card-text class="display-1 card-text">
          {{ albumTitle }}

          <router-link
            :to="{
              name: 'SingleAlbum',
              params: {
                albumTitle: albumTitle,
                albumId: albumId,
                artist: artist
              }
            }"
          >
            <v-btn class="display-1"
              ><span class="mdi mdi-arrow-right-bold"></span>
            </v-btn>
          </router-link>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "AlbumCard",

  props: {
    albumTitle: {
      type: String,
      required: true
    },

    artist: {
      type: String,
      required: true
    },

    albumId: {
      type: String,
      required: true
    },

    genre: {
      type: String,
      required: true
    },

    format: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.albums-card:hover {
  background-color: darkgray;
}
a {
  float: right;
}
</style>
