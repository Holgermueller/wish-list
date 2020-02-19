<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <v-card
        class="artist-card {'on-hover':hover}"
        :elevation="hover ? 16 : 2"
      >
        <v-card-text class="display-1 card-text">
          {{ artist }}
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
    }
  }
};
</script>

<style scoped>
.artist-card:hover {
  background-color: darkgray;
}
</style>
