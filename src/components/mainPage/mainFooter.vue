<template>
  <v-footer v-sticky="{ zIndex: 1, stickyTop: screenHeight, disabled: false }" height="50px" dark>
    &nbsp;
    &nbsp;
    <i class="material-icons">horizontal_split</i>
    &nbsp;
    &nbsp;
    <div>Сайт компании "EE Project"</div>
    <v-spacer></v-spacer>
    <div> {{ new Date().getFullYear() }} &copy; Все права защищены.</div>
    &nbsp;
  </v-footer>
</template>

<script>
import VueSticky from 'vue-sticky';

export default {
  directives: {
    sticky: VueSticky,
  },
  computed: {
    screenHeight() {
      return window.innerHeight;
    },
  },
};
</script>

<style lang="sass" scoped>
i
  font-size: 34px
.footer
  padding-right: 10px
</style>
