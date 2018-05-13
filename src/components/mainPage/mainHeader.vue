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
              <ul>
                <li>
                  <router-link class="menu__reg--items" to="/signIn">
                    <menu-icon />
                    Войти
                  </router-link>
                </li>
                <li>
                  <router-link class="menu__reg--items" to="/signUp">
                    <span>Зарегистрироваться</span>
                  </router-link>
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
export default {
  name: 'mainHeader',
  data: () => ({
    dialog: false,
  }),
};
</script>

<style lang="sass" scoped>
@import '../../assets/sass/mainHeader.sass'
ul
  margin: 0
  li
    list-style-type: none
// i
//   margin-bottom: 4px
//   padding-right: 10px
</style>
