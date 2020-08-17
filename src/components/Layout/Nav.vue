<template>
  <div id="nav">
    <v-list nav>
      <v-list-item
        v-for="link in menuLinks"
        :key="link.title"
        :to="link.link"
        link
      >
        <v-list-item-icon>
          <v-icon>
            {{ link.icon }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <SignOut v-if="userIsAuthenticated" />
  </div>
</template>

<script>
import SignOut from "./SignOut";

export default {
  name: "Nav",

  components: {
    SignOut,
  },

  data() {
    return {
      userId: null,
      drawer: false,
    };
  },

  computed: {
    loading() {
      return this.$store.getters.loading;
    },

    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },

    menuLinks() {
      let menuLinks = [{ icon: "mdi-home", title: "Home", link: "/" }];
      if (this.userIsAuthenticated) {
        menuLinks = [
          {
            icon: "mdi-account",
            title: "Dashboard",
            link: "/dashboard",
          },
        ];
      }
      return menuLinks;
    },
  },

  watch: {
    user(value) {
      return value;
    },
  },

  methods: {},
};
</script>

<style scoped>
#nav {
  z-index: 2;
}
.nav {
  width: 25%;
  position: fixed;
  z-index: 2;
}
a {
  text-decoration: none;
}
</style>
