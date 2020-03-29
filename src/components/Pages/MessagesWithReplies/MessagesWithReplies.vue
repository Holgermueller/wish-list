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

    <v-card class="messages-with-replies">
      <v-card-title>
        {{ message }}

        <v-spacer></v-spacer>

        {{ dateMessageAdded }}
      </v-card-title>
      <v-card-text
        v-for="(singleReply, index) in repliesForThisMessage"
        :key="singleReply.replyID"
        :index="index"
      >
        {{ singleReply.replyForDOM }}

        <v-spacer></v-spacer>

        {{ singleReply.dateAdded.toDate().toDateString() }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-form ref="form">
          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field
              outlined
              type="text"
              v-model="reply"
              label="Reply..."
              append-icon="mdi-close-circle"
              @click:append="clearForm"
              append-outer-icon="mdi-send"
              @click:append-outer="postReply"
              :loading="loading"
              :disabled="loading"
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
    },

    dateMessageAdded: {
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
    return this.$store.dispatch("getReplies", {
      messageId: this.messageId
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
      this.$refs.form.reset();
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
