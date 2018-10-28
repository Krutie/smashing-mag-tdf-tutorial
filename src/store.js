import $ from "jquery";
import Vue from "vue";
import Vuex from "vuex";
import { find } from "underscore";
Vue.use(Vuex);
const state = {
  stages: [],
  teams: [],
  activeStage: {},
  activeTeam: {}
};
const getters = {
  getStages: state => state.stages,
  getTeams: state => state.teams,
  getActiveStage: state => state.activeStage,
  getActiveTeam: state => state.activeTeam
};
const mutations = {
  SET_STAGES(state, payload) {
    state.stages = payload;
  },
  SET_TEAMS(state, payload) {
    state.teams = payload;
  },
  SET_ACTIVE_STAGE(state, payload) {
    state.activeStage = payload;
  },
  SET_ACTIVE_TEAM(state, payload) {
    state.activeTeam = payload;
  }
};
const actions = {
  fetchStages({ commit }) {
    $.getJSON(
      "https://raw.githubusercontent.com/Krutie/dataRepo/master/tdf/stages.json",
      data => {
        commit("SET_STAGES", data);
      }
    );
  },
  fetchTeams({ commit }) {
    $.getJSON(
      "https://raw.githubusercontent.com/Krutie/dataRepo/master/tdf/teams.json",
      data => {
        commit("SET_TEAMS", data);
      }
    );
  },

  setActiveData({ state, commit }, payload) {
    let k = find(state.stages, stage => {
      if (stage.ID == payload) {
        return true;
      } else if (stage.UCI_CODE == payload) {
        return true;
      }
    });

    if (k != undefined) {
      commit("SET_ACTIVE_STAGE", k);
    }

    let t = find(state.teams, team => {
      return team.UCI_CODE == k.UCI_CODE;
    });
    commit("SET_ACTIVE_TEAM", t);
  }
};
let store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
}); // end of store
export default store;
