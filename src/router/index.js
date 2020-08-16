import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";
import Home from "../components/index";
import Dashboard from "../components/Pages/Dashboard/Dashboard";
import SingleItemPage from "../components/Pages/SingleItem/SingleItem";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      props: true,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/singleItem/:id",
      name: "SingleItemPage",
      component: SingleItemPage,
      props: true,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      next({
        path: "/",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
