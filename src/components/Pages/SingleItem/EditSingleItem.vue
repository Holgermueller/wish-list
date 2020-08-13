<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" text>
          <v-icon left>mdi-file-edit</v-icon>
          Edit information
        </v-btn>
      </template>

      <v-card outlined>
        <v-card-title
          >Edit information here:
          <v-icon right>mdi-file-edit</v-icon>
        </v-card-title>

        <v-card-text>
          <v-form ref="form">
            <v-container fluid>
              <v-layout wrap>
                <v-flex xs12 sm12 md12 lg12 xl12>
                  <v-text-field
                    type="text"
                    v-model="editedArtist"
                    placeholder="artist"
                    value="artist"
                    id="artist"
                    clearable
                  >
                  </v-text-field>
                </v-flex>

                <v-flex xs12 sm12 md12 lg12 xl12>
                  <v-text-field
                    type="text"
                    v-model="editedTitle"
                    placeholder="title"
                    value="title"
                    id="title"
                    clearable
                  >
                  </v-text-field>
                </v-flex>

                <v-flex xs12 sm12 md12 lg12 xl12>
                  <v-text-field
                    type="text"
                    v-model="editedMedium"
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
                    v-model="editedGenre"
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
                    v-model="editedPublisher"
                    :placeholder="publisher"
                    value="publisher"
                    id="publisher"
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
            <v-icon left>mdi-cancel</v-icon>
            Cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="updateInfo"
            :loading="loading"
            :disabled="loading"
            color="blue"
            text
          >
            <v-icon left>mdi-check</v-icon>
            Submit Changes</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "EditSingleItem",

  props: {
    artist: {
      type: String,
    },

    title: {
      type: String,
    },

    medium: {
      type: String,
    },

    publisher: {
      type: String,
    },

    genre: {
      type: String,
    },

    id: {
      type: String,
    },
  },

  data() {
    return {
      dialog: false,
      editedArtist: this.artist,
      editedTitle: this.title,
      editedMedium: this.medium,
      editedPublisher: this.publisher,
      editedGenre: this.genre,
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

    updateInfo() {
      this.$store.dispatch("editEntryInfo", {
        id: this.id,
        editedArtist: this.editedArtist,
        editedTitle: this.editedTitle,
        editedMedium: this.editedMedium,
        editedPublisher: this.editedPublisher,
        editedGenre: this.editedGenre,
      });

      this.closeDialog();
    },
  },
};
</script>

<style scoped></style>
