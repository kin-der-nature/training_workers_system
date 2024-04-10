<template>
  <div>
    <question-form v-model="question" />
  </div>
</template>

<script setup>
import questionForm from '@/components/forms/questions/index.vue'
import { reactive } from 'vue';

const question = reactive({
  name: null,
  variants: []
})

</script>

<style scoped>

</style>