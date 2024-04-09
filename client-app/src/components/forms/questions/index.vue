<template>
  <el-form-item>
    <el-input placeholder="Введите вопрос" />
  </el-form-item>
  <el-form-item>
    <variant-form v-model="variant" />
  </el-form-item>
</template>

<script setup>
import { ElInput, ElFormItem } from 'element-plus';
import VariantForm from '../variants/index.vue'
import { reactive } from 'vue';

const variant = reactive({
  variant: null,
  score: 0
})

</script>

<style scoped>
</style>