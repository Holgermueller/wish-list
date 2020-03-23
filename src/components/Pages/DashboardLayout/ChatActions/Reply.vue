<template>
  <div id="reply">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on"
          ><v-btn color="primary">
            <span class="mdi mdi-message"></span>
            Reply</v-btn
          >
        </v-btn>
      </template>

      <v-card>
        <v-card-title>Type your reply here...</v-card-title>
        <v-card-text>Form will go here... </v-card-text>
        <v-card-actions>
          <v-btn @click="dialog = false"> Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false">Reply</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Reply",

  data() {
    return {
      dialog: false
    };
  },

  methods: {}
};
</script>

<style scoped></style>
