<template>
  <div class="take_test_screen">
    <div class="question_container">
      <div class="question_title_block">
        <h1 class="question_title">
          {{ currentQuestion?.name }}
        </h1>
      </div>
    </div>
    <el-checkbox-group v-model="selectedResponses" class="take_test_variants_container">
      <el-checkbox
        v-for="varinant in currentQuestion?.variants"
        :key="varinant.id"
        size="large"
        :label="varinant.name"
        :value="varinant.id"
      />
    </el-checkbox-group>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useTakeTest } from '../../../composables/tests/takeTest';
import { useRoute } from 'vue-router';
import { ElCheckboxGroup, ElCheckbox } from 'element-plus';

const { test, currentQuestion, selectedResponses, getTestById } = useTakeTest();

const route = useRoute()

const testId = computed(() => route.params.id)

onMounted(() => {
  getTestById(testId.value)
})

</script>

<style scoped>
.take_test_screen {
  height: 100%;
}

.take_test_variants_container {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
}
</style>