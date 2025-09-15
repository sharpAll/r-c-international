<template>
  <el-scrollbar style="height:100%">
    <!-- 头部区域 -->
    <app-header></app-header>
    <!-- 主区域 -->
    <app-main></app-main>
    <!-- 底部区域 -->
    <app-footer></app-footer>
  </el-scrollbar>
</template>

<script>
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";
import AppFooter from "./AppFooter";
export default {
  data() {
    return {};
  },

  components: { AppHeader, AppMain, AppFooter },

  methods: {}
};
</script>

<style scoped></style>
