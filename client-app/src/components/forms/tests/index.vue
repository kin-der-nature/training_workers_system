<template>
    <el-form-item>
      <el-input v-model="model.name" placeholder="Введите название" />
    </el-form-item>
    <el-form-item>
      <questions-table class="test-table" />
    </el-form-item>
</template>

<script setup>
import { defineModel } from 'vue';
import { ElInput, ElFormItem } from 'element-plus';
import QuestionsTable from '../../table/questions/index.vue';

const model = defineModel()

</script>

<style scoped>

</style>