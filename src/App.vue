<template>
  <div id="app">
    <v-app>
      <main-header @openRegModal="openRegModal" @openAuthModal="openAuthModal" />
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
      <form-registration
        @updateRegModal="updateRegModal"
        :regDialog="regDialog" >
      </form-registration>
      <sign-in @updateAuthModal="updateAuthModal" :authDialog="authDialog" ></sign-in>
      <mainFooter></mainFooter>
    </v-app>
  </div>
</template>

<script>
/* eslint-disable */
import firebase         from 'firebase'                                  ;
import header           from './components/mainPage/mainHeader.vue'      ;
import formRegistration from './components/mainPage/formRegistration.vue';
import signIn           from './components/mainPage/formSignIn.vue'      ;
import mainFooter       from './components/mainPage/mainFooter.vue'      ;

const config = {
  apiKey           : 'AIzaSyDF6e6k4DN8ap4hVdmgc8jk1bW_gYtqqUU',
  authDomain       : 'dimploma-15629.firebaseapp.com'         ,
  databaseURL      : 'https://dimploma-15629.firebaseio.com'  ,
  projectId        : 'dimploma-15629'                         ,
  storageBucket    : 'dimploma-15629.appspot.com'             ,
  messagingSenderId: '697514897633'                           ,
};

firebase.initializeApp(config);

export default {
  name: 'App',

  components: {
    'main-header'      : header          ,
    'form-registration': formRegistration,
    'sign-in'          : signIn          ,
    'mainFooter'       : mainFooter      ,
  },
  /* eslint-enable */
  data: () => ({
    regDialog: false,
    authDialog: false,
  }),

  methods: {
    openRegModal() {
      this.regDialog = true;
    },
    updateRegModal() {
      this.regDialog = false;
    },
    openAuthModal() {
      this.authDialog = true;
    },
    updateAuthModal() {
      this.authDialog = false;
    },
  },

};
</script>

<style lang="sass">
@import './assets/sass/_fonts.sass'
body
  background-color: #ffffff
  position: relative

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

.slide-fade-enter-active
  transition: all 1s ease

.slide-fade-leave-active
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.slide-fade-enter, .slide-fade-leave-to
  transform: translateX(10px)
  opacity: 0

::-webkit-scrollbar
  width: 8px

/* Track */
::-webkit-scrollbar-track
  background-color: #E1E1E1

/* Handle */
::-webkit-scrollbar-thumb
  background: #303030
  border-radius: 5px

.btn__content
  height: auto
</style>
