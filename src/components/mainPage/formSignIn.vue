<template>
  <v-form @submit.prevent="onSignIn">
    <v-layout row justify-center>
      <v-dialog v-model="authDialogModal" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">Авторизация</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="email"
                    label="Почта"
                    id="authEmail"
                    v-model="email"
                    type="email"
                    required>
                    </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="password"
                    label="Пароль"
                    id="authPassword"
                    v-model="password"
                    type="password"
                    required>
                    </v-text-field>
                </v-flex>
              </v-layout>

            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" @click="authDialogModal = false">Закрыть</v-btn>
            <v-btn :loading="isLoading"
              color="blue darken-1"
              @click="onSignIn">Войти</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-form>
</template>

<script>
import { mapState } from 'vuex';
import router from '../../router';

export default {
  name: 'formRegistration',

  props: ['authDialog'],

  data() {
    return {
      email: '',
      password: '',
      name: '',
      authDialogModal: this.authDialog,
    };
  },

  watch: {
    authDialog() {
      this.authDialogModal = this.authDialog;
    },
    authDialogModal() {
      if (this.authDialogModal === false) {
        this.$emit('updateAuthModal');
      }
    },
  },
  /* eslint-disable */
  computed: {
    ...mapState({
      isLoading: state => state.auth.isLoading,
      isError  : state => state.auth.errors   ,
    }),
  },
  /* eslint-enable */
  methods: {
    onSignIn() {
      this.$emit('updateAuthModal');
      return this.$store.dispatch('auth/signIn', {
        email: this.email,
        password: this.password,
      });
    },
    close() {
      return router.go(-1);
    },
  },
};
</script>

<style lang="sass" scoped>

</style>
