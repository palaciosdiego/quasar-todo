import Vue from "vue";
import Vuex from "vuex";

import tasks from "./store-task";

Vue.use(Vuex);

export default function() {
  const Store = new Vuex.Store({
    modules: {
      tasks
    },
    strict: process.env.DEV
  });
  return Store;
}
