<template>
  <div class="form">
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-text>
              <v-container>
                <div style="color: red;" v-if="isError">
                  <span> {{ isError.message }} </span>
                </div>
                <form @submit.prevent="onSignUp">

                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="email"
                        label="Почта"
                        id="email"
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
                        id="password"
                        v-model="password"
                        type="password"
                        required></v-text-field>
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
                        :rules="[comparePasswords]"
                        ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-btn :loading="isLoading" class="btn" @click="onSignUp" type="submit">
                        <span>Зарегестрироваться</span>
                      </v-btn>
                    </v-flex>
                  </v-layout>

                </form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'formRegistration',

  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    };
  },

  computed: {
    comparePasswords() {
      return this.password === this.confirmPassword
        ? true
        : 'Passwords don`t match';
    },
    ...mapState({
      isLoading: state => state.signUp.isLoading,
      isError: state => state.signUp.errors,
    }),
  },

  methods: {
    onSignUp() {
      return this.$store.dispatch('signUp/signUp', {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="sass" scoped>
.btn
  height: auto
.form
  text-align: center
  padding-top: 200px
  color: #000000
</style>
