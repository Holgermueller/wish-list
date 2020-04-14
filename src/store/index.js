import Vue from "vue";
import Vuex from "vuex";

import users from "./users";
import userProfiles from "./userProfiles";
import shared from "./shared";
import messages from "./messages";
import replies from "./replies";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    users: users,
    userProfiles: userProfiles,
    shared: shared,
    messages: messages,
    replies: replies
  }
});
