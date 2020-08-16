<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" :class="`${priority}`" text>
          <v-icon left>mdi-priority-high</v-icon>
          Update Priority
        </v-btn>
      </template>

      <v-card :class="`${priority}`" outlined>
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
          <v-btn @click="closeDialog" color="red" text>
            <v-icon left>mdi-cancel</v-icon>
            Cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="updatePriority"
            :loading="loading"
            :disabled="loading"
            color="blue"
            text
            ><v-icon left>mdi-check</v-icon> Update</v-btn
          >
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

  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },

    updatePriority() {
      this.$store.dispatch("changePriority", {
        id: this.id,
        newSelectedPriority: this.newSelectedPriority,
      });

      this.closeDialog();
    },
  },
};
</script>

<style scoped>
.Soon {
  color: #228b22;
  border-color: #228b22;
  border-width: 2px;
}

.Whenever {
  color: #00bfff;
  border-width: 2px;
  border-color: #00bfff;
}

.Now {
  color: #b22222;
  border-color: #b22222;
  border-width: 2px;
}
</style>
