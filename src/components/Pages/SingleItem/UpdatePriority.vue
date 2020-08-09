<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">
          Update Priority
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          Change Priority
        </v-card-title>

        <v-card-text>
          <v-form ref="form">
            <v-container fluid>
              <v-layout wrap>
                <v-flex xs12 sm12 md12 lg12 xl12>
                  <v-select
                    value="priority"
                    v-model="newSelectedPriority"
                    :items="priorities"
                    label="Priority?"
                  ></v-select>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="closeDialog">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="updatePriority">Update</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "UpdatePriority",

  props: {
    priority: {
      type: String,
    },

    id: {
      type: String,
    },
  },

  data() {
    return {
      dialog: false,
      editedPriority: this.priority,
      priorities: ["Now", "Soon", "Whenever"],
      newSelectedPriority: "",
    };
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },

    updatePriority() {
      console.log(this.newSelectedPriority);

      this.closeDialog();
    },
  },
};
</script>

<style scoped></style>
