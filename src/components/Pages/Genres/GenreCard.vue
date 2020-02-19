<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <v-card class="genre-card {'on-hover':hover}" :elevation="hover ? 16 : 2">
        <v-card-text class="display-1 card-text">
          {{ genre }}
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "GenreCard",

  props: {
    genre: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.genre-card:hover {
  background-color: darkgray;
}
</style>
