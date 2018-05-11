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
                    Войти
                  </router-link>
                </li>
                <li>
                  <router-link class="menu__reg--items" to="/signUp">
                    Зарегистрироваться
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
ul
  margin: 0
  li
    list-style-type: none

.main
  header
    padding-top: 20px
    .logo
      font-size: 28px
      font-family: 'Roboto', sans-serif
      color: #424242
      text-transform: uppercase
      span
        color: #ff5722
      &:hover
        text-decoration: none
    .menu
      display: flex
      justify-content: flex-start
      ul
        display: flex
      &__items
        margin: 0 40px
        font-size: 16px
        font-family: 'Roboto', sans-serif
        text-transform: uppercase
        color: #424242
        transition: all .3s
        &:hover
          text-decoration: none
          color: #bdbdbd
      &__reg
        ul
          display: flex
          justify-content: center
        &--items
          margin: 0 20px
          font-size: 16px
          font-family: 'Roboto', sans-serif
          text-transform: uppercase
          color: #424242
          transition: all .3s
          &:hover
            text-decoration: none
            color: #BDBDBD
</style>
