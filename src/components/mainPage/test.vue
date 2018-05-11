<template>
  <div class="test" data-app>
    <v-app id="inspire">
      <v-container>
        <v-layout row>
          <v-flex xs6>
            <h3>Выберите предмет</h3>
          </v-flex>
          <v-flex xs6>
            <v-select
              :items="getName"
              v-model="selectedTest"
              label="Выберите..."
              single-line
              append-icon="▾"
              item-text="name"
              :loading="isLoading"
            ></v-select>
          </v-flex>
        </v-layout>
          <div class="beginBtn" v-if="selectedTest">
            <v-layout row align-center>
              <v-flex xs12 class="text-xs-center">
                <v-btn
                to="/test/beginTest"
                @click="sendId"
                round
                depressed
                large
                color="primary">
                  Начать тест {{ selectedTest.name }}
                </v-btn>
              </v-flex>
            </v-layout>
          </div>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import router from '../../router';

export default {
  name: 'test',
  data() {
    return {
      selectedTest: null,
    };
  },
  computed: {
    ...mapState({
      isLoading: state => state.getName.isLoading,
      getName: state => state.getName.names,
    }),
    ...mapActions({
      getNameOfTest: 'getName/getNameOfTest',
    }),
  },
  created() {
    if (!this.getName.length > 0) {
      return this.getNameOfTest;
    }
    return null;
  },
  watch: {
    selectedTest() {
      return router.push(`${this.$route.name}/beginTest/${this.selectedTest.id}`);
    },
  },
};
</script>

<style lang="sass">
i
  font-style: normal!important

.btn__content
  height: auto

.test
  color: #000000
  #inspire
    margin-top: 20px
    .beginBtn
      text-align: center
</style>

