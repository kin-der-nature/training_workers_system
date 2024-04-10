<template>
  <el-form-item>
    <el-input v-model="model.name" placeholder="Введите вопрос" />
  </el-form-item>
  <el-form-item>
    <div class="variant_form__container">
      <variant-form v-model="variant" />
      <el-button @click="addVariant()">
        Добавить вариант
      </el-button>
    </div>
  </el-form-item>
  <el-form-item>
    <variant-table :data="model.variants" border />
  </el-form-item>
</template>

<script setup>
import { ElInput, ElButton, ElFormItem } from 'element-plus';
import VariantForm from '../variants/index.vue'
import VariantTable from '../../table/variants/index.vue'
import { ref } from 'vue';

const defaultVariantValue = {
  name: null,
  counte: 0
}

const variant = ref({ ...defaultVariantValue })

const model = defineModel();

const addVariant = () => {
  model.value.variants.push({ ...variant.value })
  resetVariantState()
}

const resetVariantState = () => {
  variant.value = { ...defaultVariantValue }
}


</script>

<style scoped>
.variant_form__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}
</style>