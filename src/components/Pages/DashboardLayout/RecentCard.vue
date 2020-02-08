<template>
  <div>
    <v-card>
      <v-card-title>{{ albumTitle }}</v-card-title>
      <v-card-text></v-card-text>
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
    }
  }
};
</script>
