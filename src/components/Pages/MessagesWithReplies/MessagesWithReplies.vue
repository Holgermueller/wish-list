<template>
  <div id="messagesWithReplies">
    <div>
      <v-layout row v-if="error">
        <v-flex xs12 sm12 md12 lg12 xl12>
          <app-alert
            @dismissed="onDismissed"
            :text="error.message || error"
          ></app-alert>
        </v-flex>
      </v-layout>
    </div>

    <div>
      <v-card class="page-header">
        <v-card-title>
          {{ displayNameOfPoster }}
        </v-card-title>

        <v-card-subtitle> </v-card-subtitle>

        <v-card-text>
          {{ message }}

          <v-spacer></v-spacer>

          {{ dateMessageAdded }}
        </v-card-text>
      </v-card>
    </div>

    <v-card class="messages-with-replies">
      <v-card-title>Replies:</v-card-title>
      <v-card-text
        v-for="(singleReply, index) in repliesForThisMessage"
        :key="index"
        :index="index"
      >
        {{ singleReply.replierName }}
        {{ singleReply.replyForDOM }}

        <v-spacer></v-spacer>

        {{ singleReply.dateAdded.toDate().toDateString() }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn>Like</v-btn>
      </v-card-actions>
    </v-card>

    <ReplyForm
      :replyId="singleReply.replyId"
      :replierName="replierName.displayName"
      :messageId="messageId"
    />
  </div>
</template>

<script>
import ReplyForm from "./ReplyForm";

export default {
  name: "MessagesWithReplies",

  components: {
    ReplyForm,
  },

  props: {
    message: {
      type: String,
      required: true,
    },

    messageId: {
      type: String,
      required: true,
    },

    dateMessageAdded: {
      type: String,
      required: true,
    },

    displayNameOfPoster: {
      type: String,
    },
  },

  created() {
    return this.$store.dispatch("getReplies", {
      messageId: this.messageId,
    });
  },

  computed: {
    repliesForThisMessage() {
      return this.$store.getters.replies;
    },

    loading() {
      return this.$store.getters.loading;
    },

    error() {
      return this.$store.getters.error;
    },

    replierName() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style scoped>
.page-header {
  width: 75%;
  margin: 7% auto 0;
}

.messages-with-replies {
  width: 85%;
  margin: 7% auto;
}
</style>
