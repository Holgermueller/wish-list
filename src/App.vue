<template>
  <v-app>
    <v-content>
      <Nav />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Nav from "./components/Layout/Nav";

export default {
  name: "App",

  components: {
    Nav
  },

  data() {
    return {};
  }
};
</script>
