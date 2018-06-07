<template>
  <div class="beginTest">
    <b-form>
      <b-container>
        <b-tabs pills card>
          <div v-if="isLoadingQuest" >Loading...</div>
          <b-tab
            v-else
            :key="question.id"
            v-for="(question, index) in getQuestions"
            :title="(`Вопрос № ${index + 1}`)">
            <h1>{{question.title}}</h1>
              <b-form-group
                v-for="answer in getAnswers"
                v-if="answer.quest_id === question.id && !isLoadingAns"
                :key="answer.id">
                <b-form-radio-group :options="[answer.answer]"></b-form-radio-group>
              </b-form-group>
          </b-tab>
        </b-tabs>
      </b-container>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'beginTest',

  data() {
    return {
      test_id: this.$route.params.id,
    };
  },

  computed: {
    ...mapState({
      isLoadingQuest: state => state.getQuestions.isLoading,
      isLoadingAns: state => state.getAnswers.isLoading,
      getQuestions: state => state.getQuestions.questions,
      getAnswers: state => state.getAnswers.answers,
    }),
    ...mapGetters({
      getId: 'getQuestions/getId',
    }),
  },

  watch: {
    isLoadingQuest() {
      if (!this.isLoadingQuest) {
        this.$store.dispatch('getAnswers/getAllAnswers', this.getId);
      }
    },
  },

  created() {
    this.$store.dispatch('getQuestions/getAllQuestions', this.test_id);
  },
};
</script>

<style lang='sass' scoped>

</style>
