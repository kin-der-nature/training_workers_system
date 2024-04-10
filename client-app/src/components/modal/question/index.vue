<template>
  <el-dialog>
    <question-section />
  </el-dialog>
</template>

<script setup>
import { ElDialog } from 'element-plus';
import QuestionSection from '@/components/sections/questions/create/index.vue'

const model = defineModel()

</script>

<style scoped>

</style>