<template>
  <div class="create_tests_screen">
    <el-form class="test-form" size="large">
      <el-form-item>
        <test-form v-model="test" />
      </el-form-item>
      <el-form-item>
        <el-button class="create_test_button">
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
import { ElForm, ElButton } from 'element-plus';
import TestForm from '../../../components/forms/tests/index.vue'
import { createTestRequest } from '../../../api/test';

const test = reactive({})

const createTest = (test) => {
  createTestRequest(test);
}

</script>

<style scoped>
.create_test_button {
  width: 100%;
}
</style>