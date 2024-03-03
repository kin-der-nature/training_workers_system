<script setup>
import { defineOptions } from 'vue';
import defaultLayout from './layouts/default/index.vue'
import { useRoute } from 'vue-router';

defineOptions({
  components: { defaultLayout }
})

const route = useRoute()

const layout = computed(() => route.meta.layout || 'defaultLayout')

</script>

<template>
  <component :is="layout" class="app">
    <router-view />
  </component>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100%;
}
</style>
