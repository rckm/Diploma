/* eslint no-shadow: ["error", { "allow": ["state"] }], no-param-reassign: "error" */

import db from '../../config';

// inital state
const state = {
  questions: [],
  isLoading: false,
  errors: null,
};

// mutations
const mutations = {
  getData(state, payload) {
    state.questions = payload;
  },
  setLoading(state, payload) {
    state.isLoading = payload;
  },
  setError(state, payload) {
    state.errors = payload;
  },
  clearError(state) {
    state.errors = null;
  },
};

// actions
const actions = {
  getAllQuestions({ commit }, payload) {
    commit('setLoading', true);
    commit('clearError');
    db.doc(`questions/${payload}`).get()
      .then((doc) => {
        const data = [];
        data.push({
          id: doc.id,
          ...doc.data(),
        });
        commit('getData', data);
        commit('setLoading', false);
      });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
