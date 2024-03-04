<template>
  <el-card class="default_card">
    <slot name="preview-image">
      <div class="preview_image_container">
        <img class="preview-image">
      </div>
    </slot>
  </el-card>
</template>

<script setup>
import { ElCard } from 'element-plus';
</script>

<style scoped>
.preview_image_container {
  width: 100%;
  height: 100%;
}
</style>