<template>
  <q-page class="row items-center justify-center">
    <q-card class="auth-card q-pa-md">
      <q-tabs v-model="tab" class="text-primary">
        <q-tab name="login" label="Login" />
        <q-tab name="register" label="Register" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <q-form @submit.prevent="handleLogin" class="q-gutter-md">
            <q-input v-model="loginForm.email" label="Email" type="email" />
            <q-input v-model="loginForm.password" label="Password" type="password" />
            <q-btn type="submit" label="Login" color="primary" class="full-width" />
          </q-form>
        </q-tab-panel>

        <q-tab-panel name="register">
          <q-form @submit.prevent="handleRegister" class="q-gutter-md">
            <q-input v-model="registerForm.email" label="Email" type="email" />
            <q-input v-model="registerForm.password" label="Password" type="password" />
            <q-btn type="submit" label="Register" color="primary" class="full-width" />
          </q-form>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../stores/auth';
import { useRouter } from 'vue-router';

const tab = ref('login');
const loginForm = ref({
  email: '',
  password: '',
});
const registerForm = ref({
  email: '',
  password: '',
});

const userStore = useUserStore();

const handleLogin = async () => {
  try {
    await userStore.login(loginForm.value.email, loginForm.value.password);
  } catch (error) {
    console.error('Login failed:', error);
  }
};

const handleRegister = async () => {
  try {
    await userStore.register(registerForm.value.email, registerForm.value.password);
  } catch (error) {
    console.error('Registration failed:', error);
  }
};
</script>

<style scoped>
.auth-card {
  width: 100%;
  max-width: 400px;
}
</style>
