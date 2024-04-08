<template>
  <el-table>
    <el-table-column type="selection" />
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
import { getSummaryAllScore } from '../../../utils/questions/index.js'

</script>

<style scoped>

</style>