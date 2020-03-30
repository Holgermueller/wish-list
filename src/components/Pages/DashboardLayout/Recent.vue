<template>
  <div id="recent">
    <v-card class="recent-header">
      <v-card-title>
        <h1>Recent Messages appear here:</h1>
      </v-card-title>
    </v-card>

    <RecentCard
      v-for="(message, index) in getMessages"
      :key="index"
      :message="message.message"
      :messageId="message.messageId"
      :dateAdded="message.dateAdded.toDate().toDateString()"
      :displayNameOfPoster="message.displayNameOfPoster"
    />
  </div>
</template>

<script>
import RecentCard from "./RecentCard";

export default {
  name: "Recents",

  components: {
    RecentCard
  },

  created() {
    return this.$store.dispatch("getMessages");
  },

  computed: {
    loading() {
      return this.$store.getters.loading;
    },

    getMessages() {
      return this.$store.getters.messages;
    }
  }
};
</script>

<style scoped>
#recent {
  width: 75%;
  margin: 2% auto;
}
.recent-header {
  margin-bottom: 2%;
}
.progress {
  text-align: center;
}
</style>
