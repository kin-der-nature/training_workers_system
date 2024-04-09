<template>
  <el-form-item>
    <el-input placeholder="Введите вопрос" />
  </el-form-item>
  <el-form-item>
    <div class="variant_form__container">
      <variant-form v-model="variant" />
    </div>
  </el-form-item>
  <el-form-item>
    <variant-table border />
  </el-form-item>
</template>

<script setup>
import { ElInput, ElFormItem } from 'element-plus';
import VariantForm from '../variants/index.vue'
import VariantTable from '../../table/variants/index.vue'
import { reactive } from 'vue';

const variant = reactive({
  variant: null,
  score: 0
})

</script>

<style scoped>
.variant_form__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}
</style>