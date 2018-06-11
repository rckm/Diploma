<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col col lg="4">
        <h1>Создать новый</h1>
        <v-text-field v-model="nameOfSubject" solo label="Название предмета"></v-text-field>
        <div class="btn-center">
          <v-btn @click.native="onSelectOfSubject" color="info">Добавить</v-btn>
        </div>
      </b-col>
      <b-col col lg="4">
        <h1>Выбрать из существующего</h1>
        <v-select
          :items="items"
          v-model="selected"
          :hint="`${selected.item}`"
          label="Выбрать предмет"
          single-line
          item-text="item"
          return-object
          persistent-hint
        ></v-select>
      </b-col>
    </b-row>
    <b-row v-if="selectedOfSubject" class="justify-content-md-center add-test">
      <b-col col lg="4">
        <div :key="i" v-for="(newTestsItem, i) in newTests">
          <v-text-field
            v-model="newTestsItem.question" solo label="Название Вопроса"></v-text-field>
          <ul class="options-of-tests">
            <li :key="i" v-for="(option, i) in newTestsItem.answerOptions">
              <v-layout align-center>
                <v-text-field
                  v-model="option.answer"
                  class="text-add-test" solo label="Вариант ответа"></v-text-field>
                <v-checkbox
                  v-model="option.is_correct"
                  hide-details class="shrink mr-2 checkbox-add-test"></v-checkbox>
              </v-layout>
            </li>
          </ul>
        </div>
        <div class="add-test-coniner">
          <v-btn @click.native="addQuestion" class="add-button" color="info">+</v-btn>
          <v-btn @click.native="deleteQuestion" class="add-button" color="error">-</v-btn>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data: () => ({
    selected: { item: '' },
    items: [{ item: 'Математика' }, { item: 'История' }, { item: 'Физика' }],
    nameOfSubject: '',
    selectedOfSubject: false,
    newTests: [{
      id: 0,
      question: '',
      answerOptions: [
        { answer: '', is_correct: false, quest_id: 0 },
        { answer: '', is_correct: false, quest_id: 0 },
        { answer: '', is_correct: false, quest_id: 0 },
        { answer: '', is_correct: false, quest_id: 0 },
      ],
    }],
  }),

  methods: {
    onSelectOfSubject() {
      this.selectedOfSubject = true;
    },
    addQuestion(questId) {
      this.newTests.push({
        question: '',
        answerOptions: [
          { answer: '', is_correct: false, quest_id: questId },
          { answer: '', is_correct: false, quest_id: questId },
          { answer: '', is_correct: false, quest_id: questId },
          { answer: '', is_correct: false, quest_id: questId },
        ],
      });
    },
    deleteQuestion() {
      this.newTests.pop();
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
