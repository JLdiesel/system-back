<template>
  <el-config-provider :locale="locale">
    <div class="app">
      <router-view /></div
  ></el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
export default defineComponent({
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  },
  name: 'App',
  setup() {
    const locale = zhCn;
    return { locale };
  }
});
</script>

<style lang="less">
.app {
  width: 100%;
  height: 100%;
}
</style>
