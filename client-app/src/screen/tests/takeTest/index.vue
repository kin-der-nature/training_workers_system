<template>
  <div class="take_test_screen">
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useTakeTest } from '../../../composables/tests/takeTest';
import { useRoute } from 'vue-router';

const { test, getTestById } = useTakeTest();
const route = useRoute()

const testId = computed(() => route.params.id)

onMounted(() => {
  getTestById(testId)
})

</script>

<style scoped></style>