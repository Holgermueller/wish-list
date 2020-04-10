<template>
  <div class="edit-this-post">
    <v-dialog>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on"> Edit Post</v-btn>
      </template>

      <v-card>
        <v-card-title>Edit this post</v-card-title>
        <v-card-subtitle>{Original message will go here}</v-card-subtitle>
        <v-card-text>
          <v-text-field
            placeholder="Message will go here  to edit"
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

  props: {},

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
