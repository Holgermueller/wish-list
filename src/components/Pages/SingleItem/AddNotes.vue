<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on"> Add/Edit Notes</v-btn>
      </template>

      <v-card>
        <v-card-title>Add notes:</v-card-title>

        <v-card-subtitle
          >Import? Certain Translation? Mention it here:</v-card-subtitle
        >

        <v-card-text>
          <v-form ref="form">
            <v-container fluid>
              <v-row>
                <v-col cols="12" md="6">
                  <v-textarea
                    name="notes"
                    placeholder="Notes"
                    value="notes"
                    v-model="notes"
                  >
                  </v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="closeDialog">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="submitNotes">
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

  props: {},

  data() {
    return {
      dialog: false,
      notes: "",
    };
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },

    submitNotes() {
      console.log(this.notes);
      this.closeDialog();
    },
  },
};
</script>

<style scoped></style>
