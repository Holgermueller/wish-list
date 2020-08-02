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
          Add something
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
                <v-flex>
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
      });

      console.log(this.artist);

      this.dialog = false;
    },

    closeDialog() {
      this.dialog = false;
    },

    resetForm() {
      this.$refs.form.reset();
    },
  },
};
</script>
