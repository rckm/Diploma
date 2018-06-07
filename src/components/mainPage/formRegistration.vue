<template>
  <v-form @submit.prevent="onSignUp">
    <v-layout row justify-center>
      <v-dialog v-model="regDialogModal" max-width="700px">
        <v-card>
          <v-card-title>
            <span class="headline">Регистрация</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    label="Почта"
                    v-model="email"
                    :error-messages="emailErrors"
                    type="email"
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                    required>
                    </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    label="Фамилия"
                    :error-messages="secondNameErrors"
                    v-model="secondName"
                    type="text"
                    @input="$v.secondName.$touch()"
                    @blur="$v.secondName.$touch()"
                    required>
                    </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    label="Имя"
                    :error-messages="nameErrors"
                    v-model="name"
                    type="text"
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                    required>
                    </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    label="Отчество"
                    :error-messages="middleNameErrors"
                    v-model="middleName"
                    type="text"
                    @input="$v.middleName.$touch()"
                    @blur="$v.middleName.$touch()"
                    required>
                    </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    label="Пароль"
                    :error-messages="passwordErrors"
                    v-model="password"
                    type="password"
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                    required>
                    </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    label="Повторите пароль"
                    :error-messages="confirmPasswordErrors"
                    v-model="confirmPassword"
                    type="password"
                    @input="$v.confirmPassword.$touch()"
                    @blur="$v.confirmPassword.$touch()"
                    required>
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
              color="blue darken-1"
              @click="onSignUp"
              >Зарегистрироваться</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-form>
</template>

<script>
import { mapState } from 'vuex';
import { validationMixin } from 'vuelidate';
import { required, maxLength, minLength, sameAs, email } from 'vuelidate/lib/validators';

export default {
  name: 'formRegistration',

  props: ['regDialog'],

  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    secondName: { required, maxLength: maxLength(10) },
    middleName: { required, maxLength: maxLength(15) },
    email: { required, email },
    password: { required, maxLength: maxLength(8), minLength: minLength(4) },
    confirmPassword: { required, sameAsPassword: sameAs('password') },
  },

  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      middleName: '',
      name: '',
      secondName: '',
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
    ...mapState({
      isLoading: state => state.auth.isLoading,
      isError: state => state.auth.errors,
    }),

    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      if (!this.$v.name.maxLength) {
        errors.push('Имя не должно содержать больше 10 символов.');
      }
      if (!this.$v.name.required) {
        errors.push('Поле "Имя" обязательно.');
      }
      return errors;
    },
    secondNameErrors() {
      const errors = [];
      if (!this.$v.secondName.$dirty) return errors;
      if (!this.$v.secondName.maxLength) {
        errors.push('Фамилия не должна содержать больше 10 символов.');
      }
      if (!this.$v.secondName.required) {
        errors.push('Поле "Фамилия" обязательно.');
      }
      return errors;
    },
    middleNameErrors() {
      const errors = [];
      if (!this.$v.middleName.$dirty) return errors;
      if (!this.$v.middleName.maxLength) {
        errors.push('Отчество не должно содержать больше 15 символов.');
      }
      if (!this.$v.middleName.required) {
        errors.push('Поле "Отчество" обязательно.');
      }
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      if (!this.$v.password.maxLength || !this.$v.password.minLength) {
        errors.push('Пароль должен иметь не меньше 4 и не больше 6 символов ');
      }
      if (!this.$v.password.required) {
        errors.push('Поле "Пароль" обязательно.');
      }
      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      if (!this.$v.confirmPassword.sameAsPassword) {
        errors.push('Пароли должны совпадать!');
      }
      if (!this.$v.confirmPassword.required) {
        errors.push('Поле "Повторите Пароль" обязателен.');
      }
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      if (!this.$v.email.email) {
        errors.push('Почта должена быть валидна!');
      }
      if (!this.$v.email.required) {
        errors.push('Поле "Почта" обязателена.');
      }
      return errors;
    },
  },

  methods: {
    onSignUp() {
      this.$v.$touch();
      if (!this.$v.$error) {
        this.$emit('updateRegModal');
        this.$store.dispatch('auth/signUp', {
          email: this.email,
          password: this.password,
          displayName: this.name,
          secondName: this.secondName,
          middleName: this.middleName,
        });
      }
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
