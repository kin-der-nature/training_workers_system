<template>
  <div>
    <question-form v-model="question" />
    <el-form-item>
      <el-button @click="createQuestion()" type="primary">
        Создать
      </el-button>
    </el-form-item>
  </div>
</template>

<script setup>
import { ElFormItem, ElButton } from 'element-plus';
import questionForm from '@/components/forms/questions/index.vue'
import { reactive } from 'vue';
import { createQuestionRequest } from '@/api/question';

const emits = defineEmits(['created'])

const callingOfCreatingEvent = (v) => {
  emits('created', v)
}

const question = reactive({
  name: null,
  variants: []
})

const createQuestion = () => {
  createQuestionRequest({ ...question })
}

</script>

<style scoped>

</style>