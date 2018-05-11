/* eslint no-shadow: ["error", { "allow": ["state"] }], no-param-reassign: "error" */

import db from '../../config';

// initial state
const state = {
  names: [],
  isLoading: false,
  errors: null,
};

// mutations
const mutations = {
  getData(state, payload) {
    state.names.push(payload);
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
  getNameOfTest({ commit }) {
    commit('setLoading', true);
    commit('clearError');
    db.collection('tests').get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          commit('getData', {
            id: doc.id,
            ...doc.data(),
          });
        });
        commit('setLoading', false);
      });
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
