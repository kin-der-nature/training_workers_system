<script setup>
import { ElCard, ElButton } from 'element-plus';
import authForm from '../../components/forms/auth/index.vue';
import { useAuth } from '../../composables/auth';

const { authParams, authByParams } = useAuth();

</script>

<template>
  <div class="auth_screen">
    <el-card class="auth_card">
      <div class="auth_title__block">
        <h1>Авторизация</h1>
      </div>
      <auth-form class="auth_form" v-model="authParams" />
      <div class="auth_button__block">
        <el-button @click="authByParams(authParams)" type="primary" size="large">
          Войти
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.auth_screen {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.auth_card {
  max-width: 300px;
  width: 100%;
  padding: 20px;
}
.auth_title__block {
  width: 100%;
  margin: 20px 0;
}
.auth_form {
  display: grid;
  gap: 20px;
}
.auth_button__block {
  width: 100%;
  height: 100%;
  margin: 20px 0;
}
</style>