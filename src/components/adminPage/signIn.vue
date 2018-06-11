<template>
  <form>
    <v-container>

      <v-layout row>
        <v-flex xs8 offset-xs2>
          <v-text-field
            v-model="login"
            :error-messages="loginErrors"
            :counter="10"
            label="Логин"
            required
            @input="$v.login.$touch()"
            @blur="$v.login.$touch()"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs8 offset-xs2>
          <v-text-field
            v-model="password"
            :error-messages="passErrors"
            label="Пароль"
            type="password"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs8 offset-xs5>
          <v-btn @click="submit">Войти</v-btn>
          <v-btn @click="clear">Очистить</v-btn>
        </v-flex>
      </v-layout>

    </v-container>
  </form>
</template>


<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength, minLength } from 'vuelidate/lib/validators';
import router from '../../router';

export default {
  mixins: [validationMixin],

  validations: {
    login: { required, maxLength: maxLength(10), minLength: minLength(4) },
    password: { required,  maxLength: maxLength(10), minLength: minLength(5) },
  },

  data: () => ({
    login: '',
    password: '',
  }),

  computed: {
    passErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      if (!this.$v.password.maxLength || !this.$v.password.minLength) {
        errors.push('Поле "Пароль" должно содержать не менее 5 и не менее 10 символов');
      }
      if (!this.$v.password.required) {
        errors.push('Поле "Пароль" не может быть пустым!');
      }
      return errors;
    },
    loginErrors() {
      const errors = [];
      if (!this.$v.login.$dirty) return errors;
      if (!this.$v.login.maxLength || !this.$v.login.minLength) {
        errors.push('Поле "Логин" должно содержать не менее 5 и не менее 10 символов');
      }
      if (!this.$v.login.required) {
        errors.push('Поле "Логин" обязательна');
      }
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (this.login === 'admin' && this.password === '123456') {
        router.push('/admin/panel');
      }
    },
    clear() {
      this.$v.$reset();
      this.name = '';
      this.email = '';
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>
<style scoped>
</style>
