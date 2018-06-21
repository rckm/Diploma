import Vue from 'vue';
import Router from 'vue-router';
import signIn from './components/adminPage/signIn.vue';
import homePage from './components/homePage.vue';
import beginTest from './components/mainPage/beginTest.vue';
import test from './components/mainPage/test.vue';
import panel from './components/adminPage/panel.vue';
import contacts from './components/mainPage/contacts.vue';
import articles from './components/mainPage/articles.vue';

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
      path: '/test/beginTest/:id',
      name: 'beginTest',
      component: beginTest,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: contacts,
    },
    {
      path: '/articles',
      name: 'articles',
      component: articles,
    },
    {
      path: '/admin',
      name: 'admin',
      component: signIn,
    },
    {
      path: '/admin/panel',
      name: 'adminPanel',
      component: panel,
    },
  ],
});
