<template>
  <div class="auth_form">
    <el-input size="large" v-model="model.name" placeholder="Введите логин" />
    <el-input size="large" v-model="model.password" type="password" placeholder="Введите пароль" show-password />
  </div>
</template>

<script setup>
import { defineModel } from 'vue';
import { ElInput } from 'element-plus';

const model = defineModel()

</script>

<style scoped>

</style>