<template>
  <div class="UserPosts">
    <v-expansion-panels popout focusable>
      <v-expansion-panel>
        <v-expansion-panel-header>
          {{ message }}
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <v-card>
            <v-card-subtitle>
              <h3>{{ displayNameOfPoster }}</h3>
            </v-card-subtitle>
            <v-card-text class="post-into">
              <h5>Posted: {{ dateAdded }}</h5>

              <h5>Number of replies: {#will go here.}</h5>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="post-actions">
              <DeletePost
                :messages="messages"
                :message="message"
                :messageId="messageId"
                :index="index"
              />
              <v-spacer></v-spacer>
              <EditPost :message="message" :messageId="messageId" />
            </v-card-actions>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import DeletePost from "./UserPostActions/DeletePostDialog";
import EditPost from "./UserPostActions/EditPost";

export default {
  name: "UserPosts",

  components: {
    DeletePost,
    EditPost
  },

  props: {
    message: {
      type: String
    },

    displayNameOfPoster: {
      type: String
    },

    dateAdded: {
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
    return {};
  },

  methods: {
    deletePost() {}
  }
};
</script>

<style scoped></style>
