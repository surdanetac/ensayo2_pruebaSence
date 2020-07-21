import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    arrayApiHome: "",
    fechaState: "",
    indicadoresDiaState: "",
    indicadoresHistorialState: "",
  },
  mutations: {
    stateconsultahome(state, data) {
      state.arrayApiHome = data;
    },
    setfechastate(state, data) {
      state.fechaState = data;
    },
    setconsultadiastate(state, data) {
      state.indicadoresDiaState = data;
    },
    setindicadoreshistorialstate(state, data) {
      state.indicadoresHistorialState = data;
    },
  },
  actions: {
    setconsulta({ commit }, indicadores) {
      commit("stateconsultahome", indicadores);
    },
    setfecha({ commit }, newFecha) {
      commit("setfechastate", newFecha);
    },
    setconsultadia({ commit }, indicadoresDia) {
      commit("setconsultadiastate", indicadoresDia);
    },
    setindicadoreshistorial({ commit }, indicadoresHistorial) {
      commit("setindicadoreshistorialstate", indicadoresHistorial);
    },
  },
  modules: {},
});
