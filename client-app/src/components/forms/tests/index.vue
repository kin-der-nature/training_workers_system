<template>
    <el-form-item>
      <el-input v-model="model.name" placeholder="Введите название" />
    </el-form-item>
</template>

<script setup>
import { defineModel } from 'vue';
import { ElInput } from 'element-plus';

const model = defineModel()

</script>

<style scoped>

</style>