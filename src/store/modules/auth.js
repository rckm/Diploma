/* eslint no-shadow: ["error", { "allow": ["state"] }], no-param-reassign: "error" */
import firebase from 'firebase';
import router   from '../../router';
import db from '../../config';

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
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(async (user) => {
        await db.doc(`users/${user.uid}`).set({
          uid: user.uid,
          displayName: payload.displayName,
          secondName: payload.secondName,
          middleName: payload.middleName,
          email: payload.email,
          registeredDateAt: new Date().toLocaleDateString(),
        });
        await commit('setLoading', false);
        await router.push('/');
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
        commit('setUser', {
          displayName: user.displayName,
          uid: user.uid,
        });
        commit('setLoading', false);
      })
      .catch((e) => {
        commit('setError', e.message);
        commit('setLoading', false);
      });
  },
/* eslint-disable */
  checkStatusAuth({
    commit,
  }) {
    commit('setLoading', true);
    firebase.auth().onAuthStateChanged((userLocal) => {
      if (userLocal) {
        db.doc(`users/${userLocal.uid}`).get()
          .then(doc => {
            commit('setUser', {
              displayName   : doc.data().displayName,
              secondName    : doc.data().secondName,
              middleName    : doc.data().middleName,
              email         : doc.data().email,
              uid           : doc.data().uid,
            });
            commit('setLoading', false);
          });
      }
      commit('setLoading', false);
    });
  },
  /* eslint-enable */
  signOut({
    commit,
  }) {
    firebase.auth().signOut();
    router.push('/');
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
