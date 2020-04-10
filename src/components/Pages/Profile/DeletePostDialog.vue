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
          <p>Deleting this post will also delete the corresponding replies.</p>
          <p>This action cannot be reversed.</p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="red" @click="dialog = false">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="blue">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "DeletePostDialog",

  props: {},

  data() {
    return {
      dialog: false,
    };
  },

  methods: {
    deleteThisPost() {},
  },
};
</script>
