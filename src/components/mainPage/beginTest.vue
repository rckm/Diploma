<template>
  <div class="beginTest">
    <b-form>
      <b-container>
        <b-tabs v-if="showTest" pills card>
          <div v-if="isLoadingQuest">Загрузка...</div>
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
                <b-form-radio-group
                v-model="selected"
                :name="answer.answer"
                :options="[answer.answer]"></b-form-radio-group>
              </b-form-group>
          </b-tab>
          <v-btn @click.native="questResult" color="info">Завершить вопрос</v-btn>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <v-btn @click.native="result" color="info">Завершить Тест</v-btn>
        </b-tabs>

        <v-card v-if="showResult">
          <v-toolbar card color="warning">
            <v-toolbar-title class="toolbar-title">
              {{ authUser.secondName }} {{ authUser.displayName }} {{ authUser.middleName }}
            </v-toolbar-title>
          </v-toolbar>
          <v-card-title style="display: flex; flex-direction: column;">
              <h2>Ваши результаты:</h2>
              <h3>Правильных ответов: {{ quantityOfTrue }}</h3>
              <h3>Неправильных ответов: {{ quantityOfFalse }}</h3>
            </v-card-title>
        </v-card>
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
      selected: '',
      quantityOfTrue: 0,
      quantityOfFalse: 0,
      showResult: false,
      showTest: true,
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
      authUser: 'auth/authorizedUser',
    }),
  },

  methods: {
    questResult() {
      return this.getAnswers.forEach((element) => {
        if (element.answer === this.selected) {
          if (element.is_correct === true) {
            ++this.quantityOfTrue; /* eslint-disable-line */
          } else {
            ++this.quantityOfFalse;  /* eslint-disable-line */
          }
        }
      });
    },
    result() {
      this.showResult = true;
      this.showTest = false;
    },
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
