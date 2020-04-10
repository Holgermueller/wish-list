<template>
  <div class="UserPosts">
    <v-expansion-panels inset focusable>
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
              <DeletePost />
              <v-spacer></v-spacer>
              <EditPost />
            </v-card-actions>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import DeletePost from "./DeletePostDialog";
import EditPost from "./EditPost";

export default {
  name: "UserPosts",

  components: {
    DeletePost,
    EditPost,
  },

  props: {
    message: {
      type: String,
    },

    displayNameOfPoster: {
      type: String,
    },

    dateAdded: {
      type: String,
    },

    messageId: {
      type: String,
    },
  },

  data() {
    return {};
  },

  methods: {
    deletePost() {},
  },
};
</script>
