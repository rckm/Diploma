import Vuex from 'vuex';
import Vue from 'vue';
import getName from './modules/getName';
import signUp from './modules/signUp';
import getQuestions from './modules/getQuestions';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    getName,
    signUp,
    getQuestions,
  },
  strict: debug,
});
