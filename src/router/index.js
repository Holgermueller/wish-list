import Vue from "vue";
import VueRouter from "vue-router";
//import firebase from "firebase";
import Home from "../components/index";
import Dashboard from "../components/Pages/Dashboard";

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
    },
  ],
});

export default router;
