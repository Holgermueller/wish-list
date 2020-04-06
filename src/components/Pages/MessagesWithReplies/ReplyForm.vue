<template>
  <div id="replyForm">
    <v-card class="form-card">
      <v-card-text>
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
              :replierName="replierName"
              :replyId="replyId"
              :messageId="messageId"
            >
            </v-text-field>
          </v-flex>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ReplyForm",

  props: {
    replierName: {
      type: String,
    },

    replyId: {
      type: String,
    },

    messageId: {
      type: String,
    },
  },

  data() {
    return {
      reply: "",
    };
  },

  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },

  methods: {
    postReply() {
      this.$store.dispatch("replyToMessage", {
        reply: this.reply,
        messageId: this.messageId,
        replierName: this.replierName,
      });
      this.clearForm();
    },

    clearForm() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.form-card {
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1;
}
</style>
