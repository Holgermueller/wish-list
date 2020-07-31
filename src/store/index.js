import Vue from "vue";
import Vuex from "vuex";

import users from "./users";
import list from "./list";
import shared from "./shared";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    users: users,
    list: list,
    shared: shared,
  },
});
