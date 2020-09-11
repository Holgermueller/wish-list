<template>
  <div id="nav">
    <v-app-bar color="#190061" class="nav white--text" fixed dense>
      <div v-for="link in menuLinks" :key="link.title" link>
        <v-btn color="#190061" :to="link.link" class="white--text">
          <v-icon>
            {{ link.icon }}
          </v-icon>
          {{ link.title }}
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <h2>Hello, {{ userName }}</h2>

      <v-spacer></v-spacer>
      <v-switch
        append-icon="mdi-white-balance-sunny"
        prepend-icon="mdi-moon-waning-crescent"
        dark
        color="white"
        @change="toggleDark"
        :ripple="false"
        inset
      ></v-switch>
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
.v-input--switch--inset {
  margin-top: 16px;
}
a {
  text-decoration: none;
}
</style>
