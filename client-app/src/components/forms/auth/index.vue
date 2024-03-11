<template>
  <div class="auth_form">
    <el-form-item>
      <el-input size="large" v-model="model.login" placeholder="Введите логин" />
    </el-form-item>
    <el-form-item>
      <el-input size="large" v-model="model.password" type="password" placeholder="Введите пароль" show-password />
    </el-form-item>
  </div>
</template>

<script setup>
import { defineModel } from 'vue';
import { ElFormItem, ElInput } from 'element-plus';

const model = defineModel()

</script>

<style scoped></style>