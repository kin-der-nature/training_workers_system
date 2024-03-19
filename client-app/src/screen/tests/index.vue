<template>
  <div class="tests-screen">
    <div class="tests-list-container">
      <default-card
        v-for="test in tests.value"
        :key="test.id" :title="test.name"
        :preview-image=" { src: '../../../public/vite.svg', alt: 'test' }"
      >
      <template #description>
        <el-button @click="router.push(`tests/${test.id}`)">
          Пройти тест
        </el-button>
      </template>
      </default-card>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useTests } from '../../composables/tests';
import defaultCard from '../../components/card/index.vue';

const { tests, getTests } = useTests()

const router = useRouter()

onMounted(() => getTests())
</script>

<style scoped>
.tests-list-container {
  width: 100%;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(3, 1fr);
}
</style>