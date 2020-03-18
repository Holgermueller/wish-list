import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";
import Home from "../components/index";
import Dashboard from "../components/Pages/Dashboard";
import Profile from "../components/Pages/Profile/Profile";
import DirectMessages from "../components/Pages/DirectMessages/DirectMessages";
import Pins from "../components/Pages/Pins/Pins";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/user",
      name: "Dashboard",
      component: Dashboard,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/directMessages",
      name: "DirectMessages",
      component: DirectMessages,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/pinned",
      name: "Pinned",
      component: Pins,
      props: true,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      next({
        path: "/",
        query: {
          redirect: to.fullpath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
