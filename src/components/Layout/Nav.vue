<template>
  <div id="nav">
    <v-btn v-if="userIsAuthenticated" @click.stop="drawer = !drawer">
      <span class="mdi mdi-compass-rose"></span>
    </v-btn>

    <v-navigation-drawer class="nav-drawer" v-model="drawer" absolute temporary>
      <div class="pa-2">
        <v-btn @click.stop="drawer = !drawer" block>
          <span class="mdi mdi-compass-rose"></span>Nav
        </v-btn>
      </div>

      <v-divider></v-divider>

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
            <v-list-item-title> {{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <SignOut v-if="userIsAuthenticated" />

      <div>
        <v-footer class="font-weight-medium ">
          &copy; 2020 Holger Mueller
        </v-footer>
      </div>
    </v-navigation-drawer>
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
      let menuLinks = [{ icon: "mdi mdi-home", title: "Home", link: "/" }];
      if (this.userIsAuthenticated) {
        menuLinks = [
          {
            icon: "mdi mdi-account",
            title: "Dashboard",
            link: "/user",
          },
          {
            icon: "mdi mdi-account-details",
            title: "Profile",
            link: "/profile",
          },
          {
            icon: "mdi mdi-email",
            title: "Messages",
            link: "/directMessages",
          },
          {
            icon: "mdi mdi-pin",
            title: "Pinned",
            link: "/pinned",
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
  height: 100%;
  width: 25%;
  position: fixed;
  z-index: 2;
}
a {
  text-decoration: none;
}
.footer {
  text-align: center;
}
</style>
