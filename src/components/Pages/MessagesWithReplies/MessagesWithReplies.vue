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

    <PageHeader
      :message="message"
      :displayNameOfPoster="displayNameOfPoster"
      :dateMessageAdded="dateMessageAdded"
    />

    <ReplyCard
      v-for="(singleReply, index) in repliesForThisMessage"
      :key="index"
      :index="index"
      :replierName="singleReply.replierName"
      :replyForDOM="singleReply.replyForDOM"
      :replyDate="singleReply.dateAdded.toDate().toDateString()"
      :replyId="singleReply.replyId"
      :likes="singleReply.likes"
    />

    <ReplyForm :replierName="replierName.displayName" :messageId="messageId" />
  </div>
</template>

<script>
import PageHeader from "./PageHeader";
import ReplyForm from "./ReplyForm";
import ReplyCard from "./ReplyCard";

export default {
  name: "MessagesWithReplies",

  components: {
    ReplyForm,
    ReplyCard,
    PageHeader,
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

<style scoped></style>
