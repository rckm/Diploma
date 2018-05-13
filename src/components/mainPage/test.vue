<template>
  <div class="test" data-app>
    <b-container>
      <b-row align-v="center" class="justify-content-center">
        <b-col cols="6">
          <b-card
            align="center"
            header="Выберите предмет"
            header-bg-variant="warning">
            <v-select
              :items="getName"
              v-model="selectedTest"
              single-line
              item-text="name"
              :loading="isLoading"
            >
            </v-select>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import router from '../../router';

export default {
  name: 'test',
  data() {
    return {
      selectedTest: null,
    };
  },
  computed: {
    ...mapState({
      isLoading: state => state.getName.isLoading,
      getName: state => state.getName.names,
    }),
    ...mapActions({
      getNameOfTest: 'getName/getNameOfTest',
    }),
  },
  created() {
    if (!this.getName.length > 0) {
      return this.getNameOfTest;
    }
    return null;
  },
  watch: {
    selectedTest() {
      return router.push(`${this.$route.name}/beginTest/${this.selectedTest.id}`);
    },
  },
};
</script>

<style lang="sass">
.test
  font-family: 'Product Sans', sans-serif
  font-weight: 500
.bg-warning
  font-size: 24px
</style>

