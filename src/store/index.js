import Vue from "vue";
import Vuex from "vuex";

import users from "./users";
import wishList from "./wishList";
import shared from "./shared";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    users: users,
    wishList: wishList,
    shared: shared,
  },
});
