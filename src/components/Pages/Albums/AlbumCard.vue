<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <v-card
        class="albums-card {'on-hover':hover}"
        :elevation="hover ? 16 : 2"
      >
        <v-card-text class="display-1 card-text">
          {{ albumTitle }}
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
    }
  }
};
</script>

<style scoped>
.albums-card:hover {
  background-color: darkgray;
}
</style>
