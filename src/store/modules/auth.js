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
  signUp({
    commit,
  }, payload) {
    commit('setLoading', true);
    commit('setError', null);
    firebase.auth().createUserWithEmailAndPassword(payload.name, payload.email, payload.password)
      .then(() => {
        commit('setLoading', false);
        router.push('/');
      })
      .catch((error) => {
        commit('setLoading', false);
        commit('setError', error.message);
      });
  },
  signIn({
    commit,
  }, payload) {
    commit('setLoading', true);
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        commit('setUser', user);
        commit('setLoading', false);
      })
      .catch((e) => {
        commit('setError', e.message);
        commit('setLoading', false);
      });
  },
  checkStatusAuth({
    commit,
  }) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        commit('setUser', {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          uid: user.uid,
          providerData: user.providerData,
        });
      }
    });
  },
  signOut({
    commit,
  }) {
    firebase.auth().signOut();
    commit('setUser', null);
  },
};

// mutations
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

// getters
const getters = {
  isUser(state) {
    return state.user !== null && state.user !== undefined;
  },
  authorizedUser(state) {
    return state.user;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
