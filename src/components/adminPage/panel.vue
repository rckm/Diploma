<template>
  <b-container>

    <b-row class="justify-content-md-center">

      <b-col col lg="4">
        <h1>Добавить новый предмет</h1>
        <v-text-field
          v-model="newTests.nameOfSubject" solo label="Название предмета"></v-text-field>
        <div class="btn-center">
          <v-btn @click.native="onSelectOfSubject" color="info">Добавить</v-btn>
        </div>
      </b-col>

      <b-col col lg="4">
        <h1>Выбрать из существующего</h1>
        <v-select
          :items="testName"
          v-model="selected"
          label="Выбрать предмет"
          single-line
          item-text="name"
          return-object
          persistent-hint
        ></v-select>
      </b-col>

    </b-row>

    <b-row v-if="selected" class="justify-content-md-center add-test">
      <b-col col lg="4">
        <div :key="i" v-for="(newTestsItem, i) in newTestData">
          <v-text-field
            v-model="newTestsItem.questionTitle" solo label="Название Вопроса"></v-text-field>
          <ul class="options-of-tests">
            <li :key="i" v-for="(answer, i) in newTestsItem.answers">
              <v-layout align-center>
                <v-text-field
                  v-model="answer.answer"
                  class="text-add-test" solo label="Вариант ответа"></v-text-field>
                <v-checkbox
                  v-model="answer.is_correct"
                  hide-details class="shrink mr-2 checkbox-add-test"></v-checkbox>
              </v-layout>
            </li>
          </ul>
        </div>
        <div class="add-test-coniner">
          <v-btn @click.native="addTestData" class="add-button" color="info">+</v-btn>
          <v-btn @click.native="deleteQuestion" class="add-button" color="error">-</v-btn>
        </div>
      </b-col>
    </b-row>

    <b-row v-if="selectedOfSubject" class="justify-content-md-center add-test">
      <b-col col lg="4">
        <div :key="i" v-for="(newTestsItem, i) in newTestData">
          <v-text-field
            v-model="newTestsItem.questionTitle" solo label="Название Вопроса"></v-text-field>
          <ul class="options-of-tests">
            <li :key="i" v-for="(answer, i) in newTestsItem.answers">
              <v-layout align-center>
                <v-text-field
                  v-model="answer.answer"
                  class="text-add-test" solo label="Вариант ответа"></v-text-field>
                <v-checkbox
                  v-model="answer.is_correct"
                  hide-details class="shrink mr-2 checkbox-add-test"></v-checkbox>
              </v-layout>
            </li>
          </ul>
        </div>
        <div class="add-test-coniner">
          <v-btn @click.native="addTestData" class="add-button" color="info">+</v-btn>
          <v-btn @click.native="deleteQuestion" class="add-button" color="error">-</v-btn>
        </div>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import uuid from 'uuid/v4';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      selected: false,
      selectedOfSubject: false,
      newTests: {
        nameOfSubject: 'asd',
        id: uuid(),
        desc: `Тесты по предмету ${this.nameOfSubject}`, // 234
      },
      newTestData: [],
    };
  },

  mounted() {
    if (!this.testName.length > 0) {
      return this.$store.dispatch('getName/getNameOfTest');
    }
    return null;
  },

  computed: {
    ...mapState({
      testName: state => state.getName.names,
    }),
  },

  methods: {
    onSelectOfSubject() {
      this.selectedOfSubject = true;
    },
    onSelected() {
      this.selected = true;
    },
    deleteQuestion() {
      this.newTestData.pop();
    },
    addTestData() {
      const questId = uuid();

      const newData = {
        id: questId,
        questionTitle: '',
        test_id: this.newTests.id,
        answers: [
          { answer: '', is_correct: false, quest_id: questId },
          { answer: '', is_correct: false, quest_id: questId },
          { answer: '', is_correct: false, quest_id: questId },
          { answer: '', is_correct: false, quest_id: questId },
        ],
      };

      this.newTestData.push(newData);
    },
  },
};
</script>

<style lang="sass" scoped>
.btn-center
  display: flex
  justify-content: center

.add-test
  margin-top: 50px

.options-of-tests
  margin-top: 10px
  margin-left: 80px

.text-add-test
  margin-top: 5px

.checkbox-add-test
  margin-top: 13px

.add-test-coniner
  display: flex
  justify-content: space-between
  .add-button
    margin-left: 0
    margin-right: 0

</style>
