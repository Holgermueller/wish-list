<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">
          <v-icon left>mdi-pencil</v-icon> Add/Edit Notes</v-btn
        >
      </template>

      <v-card>
        <v-card-title>Add notes:</v-card-title>

        <v-card-subtitle
          >Import? Certain Translation? Mention it here:</v-card-subtitle
        >

        <v-card-text>
          <v-form ref="form">
            <v-container fluid>
              <v-layout wrap>
                <v-flex>
                  <v-textarea
                    type="text"
                    :placeholder="notes"
                    v-model="editedNotes"
                    clearable
                    outlined
                  >
                  </v-textarea>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="closeDialog">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="submitNotes"
            :loading="loading"
            :disabled="loading"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "AddNotes",

  props: {
    notes: {
      type: String,
    },

    id: {
      type: String,
    },
  },

  data() {
    return {
      dialog: false,
      editedNotes: this.notes,
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

    submitNotes() {
      this.$store.dispatch("editNotes", {
        id: this.id,
        newlyEditedNotes: this.editedNotes,
      });

      this.closeDialog();
    },
  },
};
</script>

<style scoped></style>
