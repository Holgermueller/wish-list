<template>
  <div class="UserPosts">
    <v-expansion-panels inset focusable>
      <v-expansion-panel>
        <v-expansion-panel-header>
          {{ message }}
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <section class="post-into">
            {{ displayNameOfPoster }}

            {{ dateAdded }}
          </section>

          <div class="post-actions">
            <v-btn @click="deletePost">Delete Post</v-btn>
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
  },

  data() {
    return {};
  },

  methods: {
    deletePost() {},
  },
};
</script>
