<template>
  <div id="form">
    <v-card class="form-card">
      <v-card-text>
        <v-form ref="form">
          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field
              placeholder="Say something..."
              v-model="message"
              type="text"
              outlined
              append-icon="mdi-close-circle"
              @click:append="clearform"
            ></v-text-field>
          </v-flex>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn
          @click.prevent="submitAlbum"
          :loading="loading"
          :disabled="loading"
          >Submit</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Form",

  data() {
    return {
      message: ""
    };
  },

  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },

  methods: {
    submitAlbum() {
      this.$store.dispatch("addAlbum", {
        artist: this.artist
      });

      this.clearForm();
    },

    clearForm() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
.form-card {
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
