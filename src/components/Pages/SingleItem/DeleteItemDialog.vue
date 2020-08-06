<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on"> Delete Item</v-btn>
      </template>

      <v-card>
        <v-card-title>
          Are you sure you want to delete {{ artist }}, {{ title }} from your
          list?
        </v-card-title>

        <v-card-subtitle>
          This actions cannot be reversed.
        </v-card-subtitle>

        <v-card-actions>
          <v-btn @click="closeDialog">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click.prevent="deleteFromList">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "DeleteItemDialog",

  props: {
    artist: {
      type: String,
    },

    title: {
      type: String,
    },

    id: {
      type: String,
    },
  },

  data() {
    return {
      dialog: false,
    };
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },

    deleteFromList() {
      this.$store.dispatch("removeItemFromList", {
        itemId: this.id,
      });

      this.$router.push("/dashboard");
    },
  },
};
</script>

<style scoped></style>
