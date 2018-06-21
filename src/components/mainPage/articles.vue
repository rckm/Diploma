<template>
  <v-container>
    <v-layout row>
      <v-flex xs3>
        <v-card class="card" height="400px">
          <v-toolbar card color="warning">
            <v-toolbar-title class="toolbar-title">Три способа утвердить документ</v-toolbar-title>
          </v-toolbar>
          <v-card-title primary-title>
            Существует ряд документов, образующихся в процессе деятельности организации,
            утверждение которых носит обязательный характер. Как правило, к ним относятся:
            акты, задания, инструкции, правила, планы, стандарты и т.д.
          </v-card-title>
          <v-btn target="_blank" href="https://www.profiz.ru/sr/5_2018/tri_sposoba_utverdit_dok/" round absolute class="button">Читать подробнее</v-btn>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card class="card" height="400px">
          <v-toolbar card color="warning">
            <v-toolbar-title class="toolbar-title">Ознакомление с документами</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            Мы не раз говорили об ознакомлении с документами.
            В статье вспомним общие правила ознакомления работников организации с документами,
            а также разберем три сложных случая ознакомления:
            как организовать электронное ознакомление с документами?
            Что делать, если документ для ознакомления сдан в архив?
            Как быть, если работник отказывается от ознакомления?
          </v-card-text>
          <v-btn target="_blank" href="../../assets/wordFile.doc"
          round absolute class="button">
              Скачать файл
          </v-btn>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card class="card" height="400px">
          <v-toolbar card color="warning">
            <v-toolbar-title class="toolbar-title">
              Как составить текст приказа по основной деятельности
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            Формулировка: правильная или неудачная.
            Любое произведение, художественное или официально-деловое, начинается с заголовка.
            Приказ – не исключение.
            Заголовок к тексту приказа традиционно отвечает на вопрос
            «О чем?», реже – «О ком?» и представляет собой конструкцию в предложном падеже:
          </v-card-text>
          <v-btn target="_blank" href="https://www.profiz.ru/sr/4_2018/prikaz_po_osn_deyatelnost/" round absolute class="button">Читать подробнее</v-btn>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card class="card" height="400px">
          <v-toolbar card color="warning">
            <v-toolbar-title class="toolbar-title">
              Пишем письмо в госудраственный орган
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            Переписка с государственными органами часто стоит особняком в деловых
            коммуникациях организации.
            А для физических лиц переписка с «инстанциями» – настоящая эпопея.
            В статье разберем нюансы составления текстов писем для каждого из адресантов,
            а также выясним, как отправить письмо и когда ждать ответа.
          </v-card-text>
          <v-btn target="_blank" href="https://www.profiz.ru/sr/4_2018/pismo_v_gosorgan/" round absolute class="button">Читать подробнее</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import articleFile from '../../assets/wordFile.docx';

export default {
  data() {
    return {
      // articleFile,
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
