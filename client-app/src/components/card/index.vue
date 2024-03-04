<template>
  <el-card class="default_card">
    <slot name="preview-image">
      <div class="preview_image_container">
        <img class="preview-image":src="previewImage.src" :alt="previewImage.alt">
      </div>
    </slot>
  </el-card>
</template>

<script setup>
import { ElCard } from 'element-plus';

const props = defineProps({
  previewImage: {
    type: Object
  }
})
</script>

<style scoped>
.preview_image_container {
  width: 100%;
  height: 100%;
}
</style>