<template>
  <div id="recentCard">
    <v-hover v-slot:default="{ hover }">
      <v-card
        class="recent-card {'on-hover':hover}"
        :elevation="hover ? 12 : 2"
      >
        <v-card-title>{{ artist }}: {{ albumTitle }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          {{ format }}
          {{ genre }}
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "RecentCard",

  props: {
    albumTitle: {
      type: String,
      required: true
    },

    artist: {
      type: String,
      required: true
    },

    format: {
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
.recent-card {
  margin-bottom: 2%;
}
#recentCard:last-child {
  margin-bottom: 25%;
}
.recent-card:hover {
  background-color: lightslategray;
}
</style>
