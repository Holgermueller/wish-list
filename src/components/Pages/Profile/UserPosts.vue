<template>
  <div class="UserPosts">
    <v-expansion-panels inset focusable>
      <v-expansion-panel>
        <v-expansion-panel-header>
          {{ message }}
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <section class="post-into">
            <h3>{{ displayNameOfPoster }}</h3>

            <h5>Posted: {{ dateAdded }}</h5>
          </section>

          <v-divider></v-divider>

          <div class="post-actions">
            <v-btn :messageId="messageId" @click="deletePost"
              >Delete Post</v-btn
            >
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "UserPosts",

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
