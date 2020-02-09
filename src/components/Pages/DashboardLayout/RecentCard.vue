<template>
  <div>
    <v-card>
      <v-card-title>{{ albumTitle }}</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        {{ artist }}
        {{ format }}
        {{ genre }}
      </v-card-text>
    </v-card>
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
