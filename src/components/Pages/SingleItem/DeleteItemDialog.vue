<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" text>
          <v-icon left>mdi-trash-can-outline</v-icon> Delete Item</v-btn
        >
      </template>

      <v-card outlined>
        <v-card-title>
          Are you sure you want to delete {{ artist }}, {{ title }} from your
          list?
        </v-card-title>

        <v-card-text>
          <h3>
            This action cannot be reversed.
          </h3>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="closeDialog" color="red" text>
            <v-icon left>mdi-cancel</v-icon>
            Cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="deleteFromList"
            :loading="loading"
            :disabled="loading"
            color="blue"
            text
          >
            <v-icon left>
              mdi-check
            </v-icon>
            Delete</v-btn
          >
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

  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },

    deleteFromList() {
      this.$store.dispatch("removeItemFromList", {
        id: this.id,
      });

      this.$router.push("/dashboard");
    },
  },
};
</script>

<style scoped>
.v-card__title {
  white-space: inherit;
}
</style>
