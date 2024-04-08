<template>
  <div class="create_tests_screen">
    <el-form size="large">
      <test-form v-model="form" />
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { ElForm } from 'element-plus';
import TestForm from '../../../components/forms/tests/index.vue'

const form = reactive({})

</script>

<style scoped>

</style>