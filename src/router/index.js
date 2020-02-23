import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";
import Home from "../components/index";
import Profile from "../components/Pages/Dashboard";
import Genres from "../components/Pages/Genres/Genres";
import Artists from "../components/Pages/Artists/Artists";
import Albums from "../components/Pages/Albums/Albums";
import Formats from "../components/Pages/Formats/Formats";
import SingleArtist from "../components/Pages/SingleAlbumOrArtist/SingleArtist";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/user",
      name: "Profile",
      component: Profile,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/genres",
      name: "Genres",
      component: Genres,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/formats",
      name: "Formats",
      component: Formats,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/artists",
      name: "Artists",
      component: Artists,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/albums",
      name: "Albums",
      component: Albums,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/singleArtist/:albumId",
      name: "SingleArtist",
      component: SingleArtist,
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
