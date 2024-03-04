<template>
  <div class="default_layout">
    <el-menu class="default_layout_sidebar_menu">
      <el-menu-item>
        Профиль
      </el-menu-item>
      <el-menu-item>
        Курсы
      </el-menu-item>
      <el-menu-item>
        Статистика
      </el-menu-item>
    </el-menu>
    <main class="default_layout_content__block">
      <el-card class="default_layout_card_content" shadow="always">
        <div class="default_layout_card_content_title__block">
          <h1>{{ $route.meta.title }}</h1>
        </div>
        <div class="default_layout_card_content_container">
          <slot />
        </div>
      </el-card>
    </main>
  </div>
</template>

<script setup>
import { ElMenu, ElMenuItem, ElCard } from 'element-plus'
</script>

<style scoped>
.default_layout {
  display: flex;
  height: 100%;
}
.default_layout_sidebar_menu {
  max-width: 300px;
  width: 100%;
  height: 100%;
  padding: 20px 0;
}
.default_layout_content__block {
  width: 100%;
  padding: 20px;
}
.default_layout_card_content {
  width: 100%;
  height: 100%;
}
.default_layout_card_content_container {
  margin: 40px 0;
}
</style>