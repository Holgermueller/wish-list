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
        <v-btn
          v-if="clicked"
          :replyId="replyId"
          :incrementedLikes="incrementedLikes"
          @click.prevent="incrementLikes"
        >
          {{ incrementedLikes }} Like</v-btn
        >
        <v-btn
          v-else
          :replyId="replyId"
          :incrementedLikes="incrementedLikes"
          @click="decrementLikes"
        >
          <span class="mdi mdi-heart-off"></span>
          {{ incrementedLikes }} Dislike</v-btn
        >
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

    replyId: {
      type: String,
    },

    likes: {
      type: Number,
    },
  },

  data() {
    return {
      incrementedLikes: this.likes,
    };
  },

  methods: {
    incrementLikes() {
      this.incrementedLikes++;
      this.$store.dispatch("updateLikes", {
        replyId: this.replyId,
        incrementedLikes: this.incrementedLikes,
      });
    },

    decrementLikes() {
      this.incrementedLikes--;
      this.$store.dispatch("updateLikes", {
        replyId: this.replyId,
        incrementedLikes: this.incrementedLikes,
      });
    },
  },
};
</script>

<style scoped>
.messages-with-replies {
  width: 85%;
  margin: 3% auto;
}
</style>
