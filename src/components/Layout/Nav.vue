<template>
  <div id="nav">
    <v-card class="nav" tile>
      <v-navigation-drawer class="nav-drawer" permanent>
        <Welcome v-if="userIsAuthenticated" />

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
    </v-card>
  </div>
</template>

<script>
import Welcome from "./Welcome";
import SignOut from "./SignOut";

export default {
  name: "Nav",

  components: {
    Welcome,
    SignOut
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
          },
          {
            icon: "mdi mdi-email",
            title: "Messages",
            link: "/directMessages"
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

  methods: {}
};
</script>

<style scoped>
.nav {
  height: 100%;
  width: 256px;
  position: fixed;
}
a {
  text-decoration: none;
}
.footer {
  text-align: center;
}
</style>
