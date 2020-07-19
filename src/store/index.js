import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    arrayApiHome: "",
    fecha: "",
    indicadoresDiaState: "",
  },
  mutations: {
    stateconsultahome(state, data) {
      state.arrayApiHome = data;
    },
    setfechastate(state, data) {
      state.fecha = data;
    },
    setConsultaDiaState(state, data) {
      state.indicadoresDiaState = data;
    },
  },
  actions: {
    setconsulta({ commit }, data) {
      commit("stateconsultahome", data);
    },
    setfecha({ commit }, data) {
      commit("setfechastate", data);
    },
    setConsultaDia({ commit }, data) {
      commit("setConsultaDiaState", data);
    },
  },
  modules: {},
});
