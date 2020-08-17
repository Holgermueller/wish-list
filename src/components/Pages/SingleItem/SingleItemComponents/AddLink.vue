<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" text>
          <v-icon left>mdi-link</v-icon>
          Add/Edit Link
        </v-btn>
      </template>

      <v-card outlined>
        <v-card-title>
          Add/Edit a Link For This Item
          <v-icon right>mdi-link</v-icon>
        </v-card-title>

        <v-card-subtitle>
          Adding a link will help people find this item.
        </v-card-subtitle>

        <v-card-text>
          <v-form ref="form">
            <v-container fluid>
              <v-layout wrap>
                <v-flex xs12 sm12 md12 lg12 xl12>
                  <v-text-field
                    type="text"
                    v-model="linkToAddEdit"
                    :placeholder="linkTo"
                    clearable
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="closeDialog" color="red" text>
            <v-icon left>mdi-cancel</v-icon> Cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="submitLink"
            :loading="loading"
            :disabled="loading"
            color="blue"
            text
          >
            <v-icon left>mdi-check</v-icon> Submit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "AddLinkDialog",

  props: {
    linkTo: {
      type: String,
    },

    itemId: {
      type: String,
    },
  },

  data() {
    return {
      dialog: false,
      linkToAddEdit: this.linkTo,
    };
  },

  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },

  methods: {
    submitLink() {
      this.$store.dispatch("addLink", {
        itemId: this.itemId,
        editedLinkTo: this.linkToAddEdit,
      });

      this.closeDialog();
    },

    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped></style>
