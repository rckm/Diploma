<template>
  <div class="beginTest">
    <b-container>
      <div :key="(value, i)" v-for="(value, i) in getQuestions">
        <h1>{{ value.title }}</h1>
      </div>
      <div>
        <v-radio-group :key="item.id" v-for="item in getAnswers">
          <v-radio :label="item.title">
          </v-radio>
        </v-radio-group>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'beginTest',

  data() {
    return {
      test_id: this.$route.params.id,
    };
  },
  /* eslint-disable */
  computed: {
    ...mapState({
      isLoading   : state => state.getName     .isLoading,
      getQuestions: state => state.getQuestions.questions,
      getAnswers  : state => state.getAnswers  .answers  ,
    }),
  },
  /* eslint-enable */
  mounted() {
    this.$store.dispatch('getQuestions/getAllQuestions', this.test_id);
    this.$store.dispatch('getAnswers/getAllAnswers', +this.$route.params.id);
  },

};
</script>

<style lang='sass' scoped>

</style>
