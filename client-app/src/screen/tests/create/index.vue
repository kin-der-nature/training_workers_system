<template>
  <div class="create_tests_screen">
    <el-form class="test-form" size="large">
        <test-form v-model="test" />
      <el-form-item>
        <el-button class="create_question_button">
          Создать вопрос
        </el-button>
      </el-form-item>
    </el-form>
    <el-button @click="createTest(test)" size="large" type="primary">
      Создать
    </el-button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { ElForm, ElFormItem, ElButton } from 'element-plus';
import TestForm from '../../../components/forms/tests/index.vue'
import { createTestRequest } from '../../../api/test';

const test = reactive({
  name: null,
  questions: []
})

const createTest = (test) => {
  createTestRequest(test);
}

</script>

<style scoped>
.create_question_button {
  width: 100%;
}
</style>