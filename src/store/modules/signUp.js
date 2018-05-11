/* eslint no-shadow: ["error", { "allow": ["state"] }], no-param-reassign: "error" */
import firebase from 'firebase';
import router from '../../router';
// initial state
const state = {
  user: null,
  isLoading: false,
  errors: null,
};

// actions
const actions = {
  signUp({ commit }, payload) {
    commit('setLoading', true);
    commit('setError', null);
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoUrl,
        };
        commit('setLoading', false);
        commit('setUser', newUser);
        router.push('/');
      })
      .catch((error) => {
        commit('setLoading', false);
        commit('setError', error);
      });
  },
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setLoading(state, payload) {
    state.isLoading = payload;
  },
  setError(state, payload) {
    state.errors = payload;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
