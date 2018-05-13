<template>
  <div id="app">
    <v-app>
      <main-header></main-header>
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </v-app>
  </div>
</template>

<script>
import firebase from 'firebase';
import header from './components/mainPage/mainHeader.vue';

const config = {
  apiKey: 'AIzaSyDF6e6k4DN8ap4hVdmgc8jk1bW_gYtqqUU',
  authDomain: 'dimploma-15629.firebaseapp.com',
  databaseURL: 'https://dimploma-15629.firebaseio.com',
  projectId: 'dimploma-15629',
  storageBucket: 'dimploma-15629.appspot.com',
  messagingSenderId: '697514897633',
};

firebase.initializeApp(config);

export default {
  name: 'App',
  components: {
    'main-header': header,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="sass">
@import './assets/sass/_fonts.sass'
body
  background-color: #ffffff

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

.slide-fade-enter-active
  transition: all 1s ease

.slide-fade-leave-active
  transition: all .0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.slide-fade-enter, .slide-fade-leave-to
  transform: translateX(10px)
  opacity: 0
</style>
