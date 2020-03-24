<template>
  <div id="reply">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on"
          ><v-btn color="primary">
            <span class="mdi mdi-message"></span>
            Reply</v-btn
          >
        </v-btn>
      </template>

      <v-card>
        <v-card-title>Reply</v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-container fluid>
              <v-layout wrap>
                <v-flex xs12 sm12 md13 lg12 xl12>
                  <v-textarea
                    outlined
                    type="text"
                    v-model="reply"
                    label="Reply..."
                  >
                  </v-textarea>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="dialog = false"> Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn :messageId="messageId" @click.prevent="getReply">Reply</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Reply",

  props: {
    messageId: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      dialog: false,
      reply: ""
    };
  },

  methods: {
    getReply() {
      this.$store.dispatch("replyToMessage", {
        reply: this.reply,
        originalMessageId: this.messageId
      });

      this.closeDialog();
    },

    closeDialog() {
      this.dialog = false;
    }
  }
};
</script>

<style scoped></style>
