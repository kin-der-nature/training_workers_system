<template>
  <el-dialog v-model="model">
    <question-section />
  </el-dialog>
</template>

<script setup>
import { ElDialog } from 'element-plus';
import QuestionSection from '@/components/sections/questions/create/index.vue'

const model = defineModel()

const setModelValue = (v) => {
  model.value = v;
}


</script>

<style scoped>

</style>