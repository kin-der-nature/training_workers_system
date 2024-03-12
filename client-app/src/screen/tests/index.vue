<template>
  <div class="tests-screen">
    <div class="tests-list-container">
      <default-card
        v-for="test in tests.value"
        :key="test.id" :title="test.name"
        :preview-image=" { src: '../../../public/vite.svg', alt: 'test' }"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useTests } from '../../composables/tests';
import defaultCard from '../../components/card/index.vue';

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