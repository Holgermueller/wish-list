import Vue from "vue";
import Vuex from "vuex";

import users from "./users";
import shared from "./shared";
import messages from "./messages";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    users: users,
    shared: shared,
    messages: messages
  }
});
