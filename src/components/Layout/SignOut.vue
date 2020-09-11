<template>
  <div id="signOut">
    <v-btn
      @click.prevent="logout"
      :loading="loading"
      :disabled="loading"
      class="sign-out white--text"
      color="#190061"
    >
      <span class="mdi mdi-exit-to-app"></span>
      Sign Out
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "SignOut",

  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.go({ path: this.$router.path });
    },
  },
};
</script>

<style scoped>
.sign-out {
  margin: 2% auto;
}
</style>
