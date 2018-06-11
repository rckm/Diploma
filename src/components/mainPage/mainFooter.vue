<template>
  <v-footer v-sticky="{ zIndex: 1, stickyTop: screenHeight, disabled: false }" height="50px" dark>
    &nbsp;
    <div>Authors: Almambetov Jeenbek & Eduard Ilyaskin</div>
    <v-spacer></v-spacer>
    <div>&copy; Copyright  {{ new Date().getFullYear() }}</div>
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
.footer
  padding-right: 10px
</style>
