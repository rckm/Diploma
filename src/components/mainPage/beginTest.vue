<template>
  <div class="beginTest">
    <b-form>
      <b-container>
        <b-tabs pills card>
          <b-tab
            :key="value.id"
            v-for="(value, index) in getQuestions"
            :title="(`Вопрос № ${index + 1}`)">
            <h1>{{value.title}}</h1>
              <b-form-group :key="item.id" v-for="(item) in getAnswers">
                <b-form-radio-group :options="[item.title]"></b-form-radio-group>
              </b-form-group>
          </b-tab>
        </b-tabs>
      </b-container>
    </b-form>
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

  computed: {
    ...mapState({
      isLoading: state => state.getName.isLoading,
      getQuestions: state => state.getQuestions.questions,
      getAnswers: state => state.getAnswers.answers,
    }),
  },

  mounted() {
    this.$store.dispatch('getQuestions/getAllQuestions', this.test_id);
    this.$store.dispatch('getAnswers/getAllAnswers', +this.$route.params.id);
  },

};
</script>

<style lang='sass' scoped>

</style>
