<template>
  <el-form-item>
    <el-input v-model="model.name" placeholder="Введите вариант" />
  </el-form-item>
  <el-form-item>
    <el-input-number v-model="model.counte" :min="0" />
  </el-form-item>
</template>

<script setup>
import { ElFormItem, ElInput, ElInputNumber } from 'element-plus';

const model = defineModel();

</script>

<style scoped>

</style>