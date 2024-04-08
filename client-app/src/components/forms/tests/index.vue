<template>
    <el-form-item>
      <el-input v-model="model.name" placeholder="Введите название" />
    </el-form-item>
    <el-form-item>
      <questions-table :data="questions.value" class="test-table" />
    </el-form-item>
</template>

<script setup>
import { defineModel, onMounted } from 'vue';
import { ElInput, ElFormItem } from 'element-plus';
import QuestionsTable from '../../table/questions/index.vue';
import { useQuestions } from '../../../composables/questions/index.js';

const model = defineModel()

const { questions, getQuestions } = useQuestions();

onMounted(() => getQuestions())

</script>

<style scoped>

</style>