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
        {{ messageId }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-form ref="form">
          <v-flex xs12 sm12 md13 lg12 xl12>
            <v-text-field
              outlined
              type="text"
              v-model="reply"
              label="Reply..."
              append-icon="mdi-close-circle"
              @click:append="clearForm"
              append-outer-icon="mdi-send"
              @click:append-outer="postReply"
            >
            </v-text-field>
          </v-flex>
        </v-form>
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

    messageId: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      reply: ""
    };
  },

  created() {
    return this.$store.dispatch("getReplies");
  },

  computed: {
    repliesForThisMessage() {
      return this.$store.getters.replies;
    }
  },

  methods: {
    postReply() {
      this.$store.dispatch("replyToMessage", {
        reply: this.reply,
        messageId: this.messageId
      });
      this.clearForm();
    },

    clearForm() {
      this.$refs.message.reset();
    }
  }
};
</script>

<style scoped>
.messages-with-replies {
  width: 85%;
  margin: 15% auto;
}
</style>
