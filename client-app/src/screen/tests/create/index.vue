<template>
  <div class="create_tests_screen">
    <test-form v-model="form" size="large" />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import TestForm from '../../../components/forms/tests/index.vue'

const form = reactive({})

</script>

<style scoped>

</style>