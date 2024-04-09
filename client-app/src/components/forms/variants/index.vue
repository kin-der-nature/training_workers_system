<template>
  <el-form-item>
    <el-input v-model="model.variant" placeholder="Введите вариант" />
  </el-form-item>
  <el-form-item>
    <el-input-number :min="0" />
  </el-form-item>
</template>

<script setup>
import { ElFormItem, ElInput, ElInputNumber } from 'element-plus';

const model = defineModel();

</script>

<style scoped>

</style>