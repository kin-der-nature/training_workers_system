<template>
  <div class="tests-screen">
    <div class="tests-list-container">

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useTests } from '../../composables/tests';

const { tests, getTests } = useTests()

onMounted(() => getTests())
</script>

<style scoped>
.tests-list-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>