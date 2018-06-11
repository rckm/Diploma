<template>
  <v-container>
    <v-layout row>
      <v-flex xs3>
        <v-card class="card" height="400px">
          <v-toolbar card color="warning">
            <v-toolbar-title class="toolbar-title">Правила приема</v-toolbar-title>
          </v-toolbar>
          <v-card-title primary-title>
            Заочное отделение является структурным подразделением
            колледжа экономики, бизнеса и права КЭУК.
            Обучение  на заочном отделении осуществляется на платной договорной основе.
            На заочном отделении колледжа ЭБП можно получить
            образование по самым востребованным на сегодняшний
            день направлениям на казахском,
            русском языках.
          </v-card-title>
          <v-btn round absolute class="button">Подробнее</v-btn>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card class="card" height="400px">
          <v-toolbar card color="warning">
            <v-toolbar-title class="toolbar-title">Рассписание занятий</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            Здесь вы можете получить полноценное рассписание о заочном отделении.
          </v-card-text>
          <v-btn round absolute class="button">Подробнее</v-btn>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card class="card" height="400px">
          <v-toolbar card color="warning">
            <v-toolbar-title class="toolbar-title">Объявления</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            Здесь вы можете получить график по пересдачами и по графиком защиты.
          </v-card-text>
          <v-btn round absolute class="button">Подробнее</v-btn>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card class="card" height="400px">
          <v-toolbar card color="warning">
            <v-toolbar-title class="toolbar-title">Правила приема</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            Content #2
          </v-card-text>
          <v-btn round absolute class="button">Подробнее</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
    <v-spacer></v-spacer>
    <v-container>
      <v-layout row>
        <v-card width="50%">
          <v-toolbar card color="warning">
            <v-toolbar-title class="toolbar-title">
              ВЫЕЗД СТУДЕНТОВ И ПРЕПОДАВАТЕЛЕЙ В Г.АСТАНА
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            В целях реализации задач, обозначенных в программной статье Н.А. Назарбаева
            «Болашаққа бағдар: рухани жаңғыру» по направлению «Туғанжер» в колледже экономики,
            бизнеса и права КЭУК состоялся выезд студентов и преподавателей на экскурсию в г.Астана.
            Цель посещения: ознакомление с наследием Международной специализированной выставки
            ЭКСПО-2017,
            экскурсия в Национальный музей и обзорная экскурсия по столице.
          </v-card-text>
          <v-card-media
            class="card-media"
            height="500px"
            :src="img"
          ></v-card-media>
          <v-btn round class="news_btn">Подробнее</v-btn>
        </v-card>
        <v-card width="50%">
          <v-toolbar card color="warning">
            <v-toolbar-title class="toolbar-title">
              КРУГЛЫЙ СТОЛ НА ТЕМУ «ЗЕЛЕНАЯ ЭКОНОМИКА – ИНДУСТРАЛИЗАЦИЯ КАЗАХСТАНА»
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            30.05.2018 03:22
            25.05. 2018 г. преподаватели П(Ц)К экономических дисциплин Жилмасова Г.Ш.,
            Несипбаев Р.Е., провели круглый стол на тему
            «Зеленая экономика – индустрализация Казахстана»
            среди студентов проживающих в общежитии №1 и №2
          </v-card-text>
          <v-card-media
            class="card-media"
            height="550px"
            :src="img2"
          ></v-card-media>
          <v-btn round class="news_btn">Подробнее</v-btn>
        </v-card>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import img from './../../assets/kebp.jpg';
import img2 from './../../assets/kebp2.jpg';

export default {
  data() {
    return {
      img,
      img2,
    };
  },
};
</script>

<style lang="sass" scoped>
.card
  position: relative
  margin-left: 10px
  .toolbar-title
    color: #000000
  .button
    top: 87%
    left: 17px
.news_btn
  margin: 20px
</style>
