<template>
  <div id="header">
    <v-card class="app-header" tile>
      <h1>My Record Collection</h1>
      <v-btn @click="logout" :loading="loading" :disabled="loading">
        <span class="mdi mdi-exit-to-app"></span>
        Sign Out
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      userId: null
    };
  },

  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },

  watch: {
    user(value) {
      return value;
    }
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.go({ path: this.$router.path });
    }
  }
};
</script>
