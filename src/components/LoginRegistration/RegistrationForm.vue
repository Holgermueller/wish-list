<template>
  <div id="register">
    <v-layout row v-if="error">
      <v-flex xs12 sm12 md12 lg12 xl12>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>

    <v-form ref="form">
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-text-field
          prepend-icon="mdi-account-circle"
          v-model="displayName"
          label="Username *"
          outlined
        ></v-text-field>
      </v-flex>

      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-text-field
          prepend-icon="mdi-email"
          v-model="email"
          label="E-mail address *"
          outlined
        ></v-text-field>
      </v-flex>

      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-text-field
          prepend-icon="mdi-lock"
          v-model="password"
          label="Password *"
          hint="Must have at least one capital letter, one symbol, one number, and be at least 8 characters"
          persistent-hint
          outlined
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
      </v-flex>

      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-text-field
          prepend-icon="mdi-lock"
          v-model="confirmPassword"
          label="Confirm Password *"
          outlined
          :type="showConfirmPassword ? 'text' : 'password'"
          :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showConfirmPassword = !showConfirmPassword"
        ></v-text-field>
      </v-flex>
    </v-form>

    <small>* Indicates required field</small>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn color="red" @click="clearRegistrationForm" class="white--text">
        <span class="mdi mdi-close-circle white--text"></span>
        Cancel
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        color="blue"
        @click.prevent="checkRegistrationData"
        class="white--text"
        :loading="loading"
        :disabled="loading"
      >
        <span class="mdi mdi-check-bold white--text"></span>
        Register
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: "RegistrationForm",

  data() {
    return {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      showConfirmPassword: false,
      valid: true,
      errors: []
    };
  },

  computed: {
    // user() {},
    // error() {},
    // loading() {}
  },

  watch: {},

  methods: {
    registerUser() {},

    clearRegistrationForm() {
      this.$refs.form.reset();
    },

    onDismissed() {
      this.$store.dispatch("clearError");
    }
  }
};
</script>

<style scoped></style>
