<template>
  <div id="login">
    <v-layout row v-if="error">
      <v-flex xs12 sm12 md12 lg12 xl12>
        <app-alert
          @dismissed="onDismissed"
          :text="error.message || error"
        ></app-alert>
      </v-flex>
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
      <v-btn color="red" @click.prevent="clearLoginForm" class="white--text">
        <span class="mdi mdi-close-circle"></span>Cancel
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        color="blue"
        class="white--text"
        @click.prevent="checkLoginForm"
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
      errorFromDom: ""
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
    checkLoginForm() {
      if (!this.email && !this.password) {
        this.$store.dispatch("setError", {
          errorFromDom: "Please fill out all of the fields."
        });
      } else if (!this.email) {
        this.$store.dispatch("setError", {
          errorFromDom: "You must provide an email to log in."
        });
      } else if (!this.password) {
        this.$store.dispatch("setError", {
          errorFromDom: "You must provide a password to log in."
        });
      } else {
        this.loginUser();
        this.clearLoginForm();
      }
    },

    loginUser() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
        userId: this.userId,
        currentUser: this.currentUser
      });
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
