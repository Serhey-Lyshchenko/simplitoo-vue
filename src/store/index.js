import Vue from "vue";
import Vuex from "vuex";
import tiles from "./modules/tiles";
import form from "./modules/form";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tiles,
    form
  }
});
