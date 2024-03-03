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
  </div>
</template>

<script setup>
import { ElMenu, ElMenuItem } from 'element-plus'
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
</style>