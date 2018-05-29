<template>
  <v-form @submit.prevent="onSignUp">
    <v-layout row justify-center>
      <v-dialog v-model="regDialogModal" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">Регистрация</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="email"
                    label="Почта"
                    id="regEmail"
                    v-model="email"
                    type="email"
                    :rules="emailRules"
                    required>
                    </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="password"
                    label="Пароль"
                    id="regPassword"
                    v-model="password"
                    type="password"
                    :rules="passRules"
                    required>
                    </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="confirmPassword"
                    label="Повторите пароль"
                    id="confirmPassword"
                    v-model="confirmPassword"
                    type="password"
                    required
                    :rules="[comparePasswords]">
                    </v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*обязательные поля</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" @click="regDialogModal = false">Закрыть</v-btn>
            <v-btn
              :loading="isLoading"
              :disabled="email.length == '' && password.length == ''"
              color="blue darken-1"
              @click="onSignUp">Зарегистрироваться</v-btn>
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

  props: ['regDialog'],

  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      regDialogModal: this.regDialog,
    };
  },

  watch: {
    regDialog() {
      this.regDialogModal = this.regDialog;
    },
    regDialogModal() {
      if (this.regDialogModal === false) {
        this.$emit('updateRegModal');
      }
    },
  },

  computed: {
    comparePasswords() {
      return this.password === this.confirmPassword ? true : 'Passwords don`t match';
    },
    // nameRules() {
    //   return [
    //     v => !!v || 'Name is required',
    //     v => v.length <= 10 || 'Name must be less than 10 characters',
    //   ];
    // },
    emailRules() {
      return [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
      ];
    },
    passRules() {
      return [
        v => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(v) ||
        'Пароль должен иметь минимум 6 символов и должен содержать одну букву и одну цифру',
      ];
    },
    /* eslint-disable */
    ...mapState({
      isLoading: state => state.auth.isLoading,
      isError  : state => state.auth.errors   ,
    }),
    /* eslint-enable */
  },

  methods: {
    onSignUp() {
      this.$emit('updateModal');
      return this.$store.dispatch('auth/signUp', {
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
.btn
  height: auto
.form
  text-align: center
  color: #000000
</style>
