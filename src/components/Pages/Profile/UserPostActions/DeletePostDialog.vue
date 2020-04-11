<template>
  <div class="deletePostDialogue">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on"> Delete Post?</v-btn>
      </template>

      <v-card>
        <v-card-title>Delete this post</v-card-title>
        <v-card-subtitle
          >Are you sure you want to delete this post?</v-card-subtitle
        >
        <v-card-text>
          <h3 class="message-to-delete">{{ message }}</h3>
          <br />
          <h3 class="warning">
            Deleting this post will also delete the corresponding replies.
          </h3>
          <h3 class="warning">This action cannot be reversed.</h3>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="red" @click="dialog = false">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :index="index"
            :messageId="messageId"
            color="blue"
            @click.prevent="deleteMessage(index)"
            >Delete</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "DeletePostDialog",

  props: {
    message: {
      type: String
    },

    messageId: {
      type: String
    },

    messages: {
      type: Array
    },

    index: {
      type: Number
    }
  },

  data() {
    return {
      dialog: false
    };
  },

  methods: {
    deleteMessage(index) {
      this.$store.dispatch("deleteMessage", {
        messageId: this.messageId
      });

      this.messages.splice(index, 1);

      this.dialog = false;
    }
  }
};
</script>

<style scoped>
.message-to-delete {
  text-align: center;
}

.warning {
  color: red;
}
</style>
