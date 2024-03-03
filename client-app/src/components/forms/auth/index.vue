<template>
  <div class="auth_form">
    <el-input v-model="model.name" placeholder="Введите логин" />
    <el-input v-model="model.password" type="password" placeholder="Введите пароль" />
  </div>
</template>

<script setup>
import { defineModel } from 'vue';
import { ElInput } from 'element-plus';

const model = defineModel()

</script>

<style scoped>

</style>