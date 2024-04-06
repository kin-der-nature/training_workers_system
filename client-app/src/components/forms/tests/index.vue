<template>
  <el-form>
    <el-form-item>
      <el-input v-model="model.name" placeholder="Введите название" />
    </el-form-item>
  </el-form>
</template>

<script setup>
import { defineModel } from 'vue';
import { ElForm, ElInput } from 'element-plus';

const model = defineModel()

</script>

<style scoped>

</style>