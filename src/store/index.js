/* eslint-disable */
import Vuex         from 'vuex'                  ;
import Vue          from 'vue'                   ;
import getName      from './modules/getName'     ;
import auth         from './modules/auth'        ;
import getQuestions from './modules/getQuestions';
import getAnswers   from './modules/getAnswers'  ;
/* eslint-enable */
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
