<template>
  <div id="messagesWithReplies">
    <v-card class="messages-with-replies">
      <v-card-title>
        {{ message }}
      </v-card-title>
      <v-card-text
        v-for="(singleReply, index) in repliesForThisMessage"
        :key="singleReply.replyID"
        :index="index"
      >
        {{ singleReply.replyForDOM }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        A form will go here.
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MessagesWithReplies",

  props: {
    message: {
      type: String,
      required: true
    },

    originalMessageId: {
      type: String,
      required: true
    }
  },

  data() {
    return {};
  },

  created() {
    return this.$store.dispatch("getReplies");
  },

  computed: {
    repliesForThisMessage() {
      return this.$store.getters.replies;
    }
  },

  messages: {}
};
</script>

<style scoped>
.messages-with-replies {
  width: 85%;
  margin: 15% auto;
}
</style>
