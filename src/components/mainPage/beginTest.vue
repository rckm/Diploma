<template>
  <div class="beginTest">
    <div :key="(value, i)" v-for="(value, i) in getQuestions">
      <h1>{{ value.title }}</h1>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'beginTest',
  data() {
    return {
      test_id: this.$route.params.id,
    };
  },
  computed: {
    ...mapState({
      isLoading: state => state.getName.isLoading,
      getQuestions: state => state.getQuestions.questions,
      getAnswers: state => state.getAnswers.answers,
    }),
    ...mapActions({
      getActionQuestions: 'getQuestions/getAllQuestions',
      getActionAnswers: 'getAnswers/getAllAnswers',
    }),
  },
  created() {
    this.$store.dispatch('getQuestions/getAllQuestions', this.test_id);
    if (!this.getAnswers.length > 0) {
      return this.getActionAnswers;
    }
    return null;
  },
};
</script>

<style lang='sass' scoped>

</style>
