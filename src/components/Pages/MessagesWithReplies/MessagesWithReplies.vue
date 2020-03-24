<template>
  <div id="messagesWithReplies">
    <v-card class="messages-with-replies">
      <v-card-title>
        {{ message }}
      </v-card-title>
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
    }
  },

  data() {
    return {};
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
