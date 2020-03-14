<template>
  <div id="nav">
    <v-card class="nav" tile>
      <v-navigation-drawer class="nav-drawer" permanent>
        <v-list>
          <v-list-item>
            <Welcome v-if="userIsAuthenticated" />
          </v-list-item>

          <router-link
            v-for="link in menuLinks"
            :key="link.title"
            :to="link.link"
          >
            <v-btn>
              <span :class="link.icon"></span>
              {{ link.title }}
            </v-btn></router-link
          >

          <v-list-item>
            <v-btn
              v-if="userIsAuthenticated"
              @click="logout"
              :loading="loading"
              :disabled="loading"
            >
              <span class="mdi mdi-exit-to-app"></span>
              Sign Out
            </v-btn>
          </v-list-item>

          <v-list-item>
            <div class="footer">
              2020 Holger Mueller
            </div>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
import Welcome from "./Welcome";

export default {
  name: "Nav",

  components: {
    Welcome
  },

  data() {
    return {
      userId: null
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
      let menuLinks = [{ icon: "mdi mdi-home", title: "Home", link: "/" }];
      if (this.userIsAuthenticated) {
        menuLinks = [
          {
            icon: "mdi mdi-account",
            title: "Dashboard",
            link: "/user"
          },
          {
            icon: "mdi mdi-account-details",
            title: "Profile",
            link: "/profile"
          }
        ];
      }
      return menuLinks;
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

<style scoped>
.nav {
  height: 100%;
  width: 256px;
  position: fixed;
  text-align: center;
}
a {
  text-decoration: none;
}
</style>
