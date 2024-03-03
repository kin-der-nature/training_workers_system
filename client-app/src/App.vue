<script setup>
import { defineOptions } from 'vue';
import defaultLayout from './layouts/default/index.vue'
import { useRoute } from 'vue-router';

defineOptions({
  components: { defaultLayout }
})

</script>

<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100%;
}
</style>
