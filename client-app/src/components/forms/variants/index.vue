<template>
  <el-form-item>
    <el-input placeholder="Введите вариант" />
  </el-form-item>
  <el-form-item>
    <el-input-number :min="0" />
  </el-form-item>
</template>

<script setup>
import { ElFormItem, ElInput, ElInputNumber } from 'element-plus';

</script>

<style scoped>

</style>