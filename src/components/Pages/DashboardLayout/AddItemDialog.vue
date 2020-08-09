<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">
          <v-icon>mdi-pencil</v-icon>
          Add An Item
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          Add something to your list...
        </v-card-title>

        <v-card-subtitle>
          <v-layout row v-if="error">
            <app-alert
              @dismissed="onDismissed"
              :text="error.message"
            ></app-alert>
          </v-layout>
        </v-card-subtitle>

        <v-card-text>
          <v-form ref="form">
            <v-container fluid>
              <v-layout wrap>
                <v-flex xs12 sm12 md12 lg12 xl12>
                  <v-text-field
                    type="text"
                    v-model="artist"
                    placeholder="Enter artist or author name here..."
                    value="artist"
                    id="artist"
                    clearable
                  >
                  </v-text-field>
                </v-flex>

                <v-flex xs12 sm12 md12 lg12 xl12>
                  <v-text-field
                    type="text"
                    v-model="title"
                    placeholder="Title"
                    value="title"
                    id="title"
                    clearable
                  >
                  </v-text-field>
                </v-flex>

                <v-flex xs12 sm12 md12 lg12 xl12>
                  <v-text-field
                    type="text"
                    v-model="medium"
                    placeholder="Medium (Album, book, etc...)"
                    value="medium"
                    id="medium"
                    clearable
                  >
                  </v-text-field>
                </v-flex>

                <v-flex xs12 sm12 md12 lg12 xl12>
                  <v-text-field
                    type="text"
                    v-model="genre"
                    placeholder="Genre"
                    value="genre"
                    id="genre"
                    clearable
                  >
                  </v-text-field>
                </v-flex>

                <v-flex xs12 sm12 md12 lg12 xl12>
                  <v-text-field
                    type="text"
                    v-model="publisher"
                    placeholder="Publisher or Lable"
                    value="publisher"
                    id="publisher"
                    clearable
                  >
                  </v-text-field>
                </v-flex>

                <v-flex xs12 sm12 md12 lg12 xl12>
                  <v-select
                    value="priority"
                    v-model="selectedPriority"
                    :items="priority"
                    label="Priority?"
                  ></v-select>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn color="red" class="white--text" @click="closeDialog"
            >Cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn
            color="blue"
            class="white--text"
            @click.prevent="createEntry"
            :loading="loading"
            :disabled="loading"
            >Submit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "AddItem",

  data() {
    return {
      dialog: false,
      artist: "",
      title: "",
      medium: "",
      genre: "",
      publisher: "",
      priority: ["Now", "Soon", "Whenever"],
      selectedPriority: "",
    };
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },

    error() {
      return this.$store.getters.error;
    },

    loading() {
      return this.$store.getters.loading;
    },
  },

  methods: {
    createEntry() {
      this.$store.dispatch("addEntryToList", {
        artist: this.artist,
        title: this.title,
        medium: this.medium,
        genre: this.genre,
        publisher: this.publisher,
        selectedPriority: this.selectedPriority,
      });

      this.resetForm();

      this.dialog = false;
    },

    closeDialog() {
      this.dialog = false;
    },

    resetForm() {
      this.$refs.form.reset();
    },

    onDismissed() {
      this.$store.dispatch("clearError");
    },
  },
};
</script>
