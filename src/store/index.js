import Vue from "vue";
import Vuex from "vuex";

import users from "./users";
import albums from "./albums";
import shared from "./shared";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    users: users,
    albums: albums,
    shared: shared
  }
});
