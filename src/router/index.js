import Vue from "vue";
import VueRouter from "vue-router";
//import firebase from "firebase";
import Home from "../components/index";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "Home", component: Home }
    // { path: "/user", name: "Profile", component: Profile, props: true }
  ]
});

export default router;
