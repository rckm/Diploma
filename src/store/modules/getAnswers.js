/* eslint no-shadow: ["error", { "allow": ["state"] }], no-param-reassign: "error" */

import db from '../../config';

// inital state
const state = {
  answers: [],
  isLoading: true,
  errors: null,
};

// mutations
const mutations = {
  getData(state, payload) {
    state.answers = payload;
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
  getAllAnswers({ commit }, payload) {
    commit('setLoading', true);
    commit('clearError');
    const answ = [];
    payload.forEach((id) => {
      db.collection('answers').where('quest_id', '==', id)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            answ.push({
              id: doc.id,
              ...doc.data(),
            });
            commit('getData', Array.of(...answ));
          });
        });
    });

    commit('setLoading', false);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
