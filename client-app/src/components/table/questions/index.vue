<template>
  <el-table>
    <el-table-column type="selection" />
    <el-table-column type="expand">
      <template #default="{ row: { variants } }">
        <variants-table border :data="variants" />
      </template>
    </el-table-column>
    <el-table-column prop="name" label="Вопрос" />
    <el-table-column label="Баллы">
      <template #default="{ row: { variants } }">
        {{ getSummaryAllScore(variants) }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { ElTable, ElTableColumn } from 'element-plus';
import VariantsTable from '../../../components/table/variants/index.vue'
import { getSummaryAllScore } from '../../../utils/questions/index.js'

</script>

<style scoped>

</style>