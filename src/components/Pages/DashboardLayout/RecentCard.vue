<template>
  <div id="recentCard">
    <v-hover v-slot:default="{ hover }">
      <v-card
        class="recent-card {'on-hover':hover}"
        :elevation="hover ? 12 : 2"
      >
        <v-card-title
          >Name of poster goes here <v-spacer></v-spacer>
          <p>Time posted goes here.</p>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text> {{ message }} </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn>Repost</v-btn>
          <v-spacer></v-spacer>
          <v-btn>Reply</v-btn>
          <v-spacer></v-spacer>
          <v-btn>Like</v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "RecentCard",

  props: {
    message: {
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
