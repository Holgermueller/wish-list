<template>
  <div id="form">
    <v-card class="form-card">
      <v-card-text>
        <v-form ref="form">
          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field
              placeholder="Say something..."
              v-model="message"
              ref="message"
              outlined
              append-icon="mdi-close-circle"
              @click:append="clearForm"
              append-outer-icon="mdi-send"
              @click:append-outer="postMessage"
              :loading="loading"
              :disabled="loading"
              :displayName="displayName"
            ></v-text-field>
          </v-flex>
        </v-form>
      </v-card-text>
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
    },

    displayName() {
      return this.$store.getters.user.displayName;
    }
  },

  methods: {
    postMessage() {
      this.$store.dispatch("submitMessage", {
        message: this.message,
        displayName: this.displayName
      });
      this.clearForm();
    },

    clearForm() {
      this.$refs.message.reset();
    }
  }
};
</script>

<style scoped>
.form-card {
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1;
}
</style>
