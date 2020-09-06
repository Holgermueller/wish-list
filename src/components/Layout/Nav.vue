<template>
  <div id="nav">
    <v-app-bar class="nav" fixed dense>
      <div v-for="link in menuLinks" :key="link.title" link>
        <v-btn :to="link.link">
          <v-icon>
            {{ link.icon }}
          </v-icon>
          {{ link.title }}
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      Hello, {{ userName }}
      <v-spacer></v-spacer>
      <v-switch @change="toggleDark" inset label="Night mode"></v-switch>
      <v-spacer></v-spacer>
      <SignOut v-if="userIsAuthenticated" />
    </v-app-bar>
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
      isDark: true,
    };
  },

  computed: {
    userName() {
      return this.$store.getters.user.displayName;
    },

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

  methods: {
    toggleDark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style scoped>
.nav {
  z-index: 2;
  width: 100%;
}
.v-input--switch {
  margin: 8px;
}

a {
  text-decoration: none;
}
</style>
