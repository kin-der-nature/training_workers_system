<template>
  <el-card class="default_card">
    <slot name="preview-image">
      <div class="preview_image_container">
        <img class="preview-image" :src="previewImage.src" :alt="previewImage.alt">
      </div>
    </slot>
    <div class="title_container">
      <slot name="title">
        <h1 class="title">{{ title }}</h1>
      </slot>
    </div>
    <div class="description_container">
      <slot name="description">
        <span class="description">
          {{ description }}
        </span>
      </slot>
    </div>
  </el-card>
</template>

<script setup>
import { ElCard } from 'element-plus';

const props = defineProps({
  previewImage: {
    type: Object
  },
  title: {
    type: String
  },
  description: {
    type: String
  }
})
</script>

<style scoped>
.preview_image_container {
  width: 100%;
  height: 100%;
}
.preview-image {
  width: 100%;
  height: 100%;
  max-height: 150px;
  object-fit: contain;
}
.title_container {
  margin: 30px 0;
  width: 100%;
}
.title {
  word-break: break-all;
}

.description_container {
  width: 100%;
  height: 100%;
  margin: 30px 0;
  word-break: break-all;
}
</style>