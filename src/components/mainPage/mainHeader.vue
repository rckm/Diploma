<template>
  <div class="main">
    <header>
      <b-container fluid>
        <b-row>

          <b-col class="text-center" md="3">
            <router-link class="logo" to="/">
              <span>Dual</span> Education
            </router-link>
          </b-col>

          <b-col md="6" align-self="center">
            <nav class="menu">
              <ul>
                <li><router-link class="menu__items" to="/test">Тест</router-link></li>
                <li><router-link class="menu__items" to="/contacts">Контакты</router-link></li>
                <li><router-link class="menu__items" to="/about">О нас</router-link></li>
              </ul>
            </nav>
          </b-col>

          <b-col md="3" align-self="center" class="justify-content-end">
            <v-progress-circular
                    v-if="isLoading"
                    indeterminate
                    color="yellow">
            </v-progress-circular>
            <nav class="menu__reg" v-else>
              <ul v-if="!isUser" >
                <li>
                  <a
                    class="menu__reg--items"
                    @click="openAuthModal"
                    color="primary"
                    flat>Войти</a>
                </li>
                <li>
                  <a
                    class="menu__reg--items"
                    @click="openRegModal"
                    color="primary"
                    flat>Зарегистрироваться</a>
                </li>
              </ul>
              <ul v-if="isUser" >
                <li>
                  <v-progress-circular
                    v-if="isLoading"
                    indeterminate
                    color="yellow">
                  </v-progress-circular>
                  <a
                    class="menu__reg--items"
                    color="primary"
                    v-else
                    flat>
                      {{ authorizedUser.displayName }}
                      {{ authorizedUser.secondName }}
                      {{ authorizedUser.middleName }}
                    </a>
                </li>
                <li>
                  <a
                    @click="signOut"
                    class="menu__reg--items"
                    color="primary"
                    flat>Выйти</a>
                </li>
              </ul>
            </nav>
          </b-col>

        </b-row>
      </b-container>
    </header>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'mainHeader',

  data() {
    return {
    };
  },

  methods: {
    openRegModal() {
      this.$emit('openRegModal');
    },
    openAuthModal() {
      this.$emit('openAuthModal');
    },
    signOut() {
      this.$store.dispatch('auth/signOut');
    },
  },
  computed: {
    ...mapGetters({
      isUser: 'auth/isUser',
      authorizedUser: 'auth/authorizedUser',
    }),
    ...mapState({
      isLoading: state => state.auth.isLoading,
      isError: state => state.auth.errors,
    }),
  },
};
</script>

<style lang="sass" scoped>
@import '../../assets/sass/mainHeader.sass'
ul
  margin: 0
  li
    list-style-type: none
</style>
