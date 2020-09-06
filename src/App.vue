<template>
  <v-app :dark="true">
    <v-main>
      <Nav :dark="true" />
      <router-view></router-view>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Nav from "./components/Layout/Nav";
import Footer from "./components/Layout/Footer";

export default {
  name: "App",

  components: {
    Nav,
    Footer,
  },
};
</script>
