<template>
  <div>
      {{ getQuestions }}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'beginTest',
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      isLoading: state => state.getName.isLoading,
      getQuestions: state => state.getQuestions.questions,
    }),
    ...mapActions({
      getActionQuestions: 'getQuestions/getAllQuestions',
    }),
  },
  created() {
    this.$store.dispatch('getQuestions/getAllQuestions', this.$route.params.id);
  },
};
</script>

<style style="sass" scoped>

</style>
