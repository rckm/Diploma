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
            <nav class="menu__reg">
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
                  <a
                    class="menu__reg--items"
                    color="primary"
                    flat>{{ authorizedUser.email }}</a>
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
import { mapGetters } from 'vuex';

export default {
  name: 'mainHeader',
  data: () => ({}),

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
