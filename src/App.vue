<template>
  <v-app>
    <v-main>
      <Nav />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Nav from "./components/Layout/Nav";

export default {
  name: "App",

  components: {
    Nav,
  },

  data() {
    return {};
  },
};
</script>
