<template>
  <div id="login">
    <v-layout row v-if="error">
      <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
    </v-layout>
    <v-form ref="form">
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-text-field
          v-model="email"
          label="Email"
          prepend-icon="mdi-account-circle"
          outlined
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-text-field
          v-model="password"
          label="Password"
          prepend-icon="mdi-lock"
          outlined
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
      </v-flex>
    </v-form>

    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="red" @click="clearLoginForm" class="white--text">
        <span class="mdi mdi-close-circle"></span>Cancel
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        color="blue"
        class="white--text"
        @click.prevent="loginUser"
        :loading="loading"
        :disabled="loading"
        >Submit</v-btn
      >
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      currentUser: false,
      userId: null,
      errors: []
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
    }
  },

  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("./user");
      }
    }
  },

  methods: {
    loginUser() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
        userId: this.userId,
        currentUser: this.currentUser
      });

      this.clearLoginForm();
    },

    clearLoginForm() {
      this.$refs.form.reset();
    },

    onDismissed() {
      this.$store.dispatch("clearError");
    }
  }
};
</script>

<style scoped></style>
