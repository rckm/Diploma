import Vue from 'vue';
import Router from 'vue-router';
import homePage from './components/homePage.vue';
import test from './components/mainPage/test.vue';
import formRegistration from './components/mainPage/formRegistration.vue';
import beginTest from './components/mainPage/beginTest.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage,
    },
    {
      path: '/test',
      name: 'test',
      component: test,
    },
    {
      path: '/signUp',
      name: 'formRegistration',
      component: formRegistration,
    },
    {
      path: '/signIn',
      name: 'signIn',
    },
    {
      path: '/test/beginTest/:id',
      name: 'beginTest',
      component: beginTest,
    },
  ],
});
