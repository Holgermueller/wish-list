<template>
  <v-app>
    <v-content>
      <Header />
      <router-view></router-view>
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

export default {
  name: "App",

  components: {
    Header,
    Footer
  },

  data() {
    return {};
  }
};
</script>
