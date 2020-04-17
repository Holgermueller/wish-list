<template>
  <div id="Welcome">
    <v-card class="welcome">
      <h1>Hello, {{ displayName }}</h1>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Welcome",

  computed: {
    displayName() {
      return this.$store.getters.user.displayName;
    },
  },
};
</script>

<style scoped>
#Welcome {
  margin: 2% auto;
}
.welcome {
  width: 100%;
  padding: 2%;
  margin: 5% auto;
  text-align: center;
}
</style>
