<template>
  <div class="edit-this-post">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on"> Edit Post</v-btn>
      </template>

      <v-card>
        <v-card-title>Edit this post</v-card-title>
        <v-card-subtitle>{{ message }}</v-card-subtitle>
        <v-card-text>
          <v-text-field
            :messageId="messageId"
            :placeholder="message"
          ></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="red" @click="dialog = false">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="blue">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "EditPost",

  props: {
    message: {
      type: String,
    },

    messageId: {
      type: String,
    },
  },

  data() {
    return {
      dialog: false,
    };
  },

  methods: {
    submitEdits() {},
  },
};
</script>

<style scoped></style>
