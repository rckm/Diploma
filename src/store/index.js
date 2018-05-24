import Vuex from 'vuex';
import Vue from 'vue';
import getName from './modules/getName';
import auth from './modules/auth'; /* eslint-disable-line */
import getQuestions from './modules/getQuestions';
import getAnswers from './modules/getAnswers';

const debug = !(process.env.NODE_ENV === 'production');

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    getName,
    auth,
    getQuestions,
    getAnswers,
  },
  strict: debug,
});
