<template>
  <div class="create_tests_screen">
    <el-form class="test-form" size="large">
      <test-form v-model="test" />
    </el-form>
    <el-button size="large" type="primary">
      Создать
    </el-button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { ElForm, ElButton } from 'element-plus';
import TestForm from '../../../components/forms/tests/index.vue'

const test = reactive({})

</script>

<style scoped>

</style>