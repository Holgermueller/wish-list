<template>
  <div id="login">
    <v-layout row v-if="error">
      <app-alert></app-alert>
    </v-layout>
    <v-form>
      <v-flex>
        <v-text-field outlined></v-text-field>
      </v-flex>
      <v-flex>
        <v-text-field outlined></v-text-field>
      </v-flex>
    </v-form>

    <v-divider></v-divider>
    <v-card-actions>
      <v-btn>Cancel</v-btn>
      <v-spacer></v-spacer>
      <v-btn @click.prevent="loginUser" :loading="loading">Submit</v-btn>
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
    // user() {},
    // error() {},
    // loading() {}
  }
};
</script>

<style scoped></style>
