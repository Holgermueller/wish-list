<template>
  <div id="recentCard">
    <v-hover v-slot:default="{ hover }">
      <v-card
        class="recent-card {'on-hover':hover}"
        :elevation="hover ? 12 : 2"
        shaped
      >
        <v-card-title
          >Name of poster goes here <v-spacer></v-spacer>
          <p>Time posted goes here.</p>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text> {{ message }} </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="primary">
            <span class="mdi mdi-forwardburger"></span>
            Repost</v-btn
          >
          <v-spacer></v-spacer>

          <ReplyDialog :messageId="messageId" />

          <v-spacer></v-spacer>

          <router-link
            :to="{
              name: 'MessagesWithReplies',
              params: {
                message: message
              }
            }"
          >
            <v-btn color="primary">
              <span class="mdi mdi-message-reply-text"></span>Conversation
            </v-btn>
          </router-link>

          <v-spacer></v-spacer>
          <v-btn color="primary">
            <span class="mdi mdi-heart-pulse"></span>
            Like</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
import ReplyDialog from "./ChatActions/Reply";

export default {
  name: "RecentCard",

  components: {
    ReplyDialog
  },

  props: {
    message: {
      type: String,
      required: true
    },

    messageId: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.recent-card {
  margin-bottom: 2%;
  background-color: mediumblue;
}
#recentCard:last-child {
  margin-bottom: 25%;
}
.recent-card:hover {
  background-color: #0066ff;
}
</style>
