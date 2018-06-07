/* eslint no-shadow: ["error", { "allow": ["state"] }], no-param-reassign: "error" */

import db from '../../config';

// inital state
const state = {
  questions: [],
  isLoading: true,
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
  getAllQuestions({
    commit,
  }, payload) {
    commit('setLoading', true);
    commit('clearError');
    db
      .collection('questions').where('test_id', '==', payload)
      .get()
      .then((querySnaphsot) => {
        const quest = [];
        querySnaphsot.forEach((doc) => {
          quest.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        commit('getData', quest);
        commit('setLoading', false);
      });
  },
};

const getters = {
  getId(state) {
    return state.questions.reduce((acc, item) => {
      acc.push(item.id);
      return acc;
    }, []);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
