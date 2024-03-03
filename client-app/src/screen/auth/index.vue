<script setup>
import { ElCard, ElButton } from 'element-plus';
import authForm from '../../components/forms/auth/index.vue';
import { reactive } from 'vue';

const usersAuth = reactive({})

</script>

<template>
  <div class="auth_screen">
    <el-card class="auth_card">
      <div class="auth_title__block">
        <h1>Войти</h1>
      </div>
      <auth-form class="auth_form" v-model="usersAuth" />
      <div class="auth_button__block">
        <el-button type="primary" size="large">
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