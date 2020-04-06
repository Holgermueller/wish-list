<template>
  <div id="replyCard">
    <v-card class="messages-with-replies">
      <v-card-text>
        {{ replierName }}
        {{ replyForDOM }}

        <v-spacer></v-spacer>

        {{ replyDate }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn>Like</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ReplyCard",

  props: {
    replierName: {
      type: String,
    },

    replyForDOM: {
      type: String,
    },

    replyDate: {
      type: String,
    },
  },

  methods: {},
};
</script>

<style scoped>
.messages-with-replies {
  width: 85%;
  margin: 3% auto;
}
</style>
