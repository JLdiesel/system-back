<template>
  <el-dropdown>
    <div class="el-dropdown-link">
      <el-avatar
        size="small"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      ></el-avatar>
      <span>{{ name }}</span>
      <i class="el-icon-arrow-down el-icon--right"></i>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>用户信息</el-dropdown-item>
        <el-dropdown-item>系统管理</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-close" @click="handleExitClick"
          >退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/store';

import cache from '@/utils/cache';
export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const name = computed(() => store.state.login.userInfo.name);

    const handleExitClick = () => {
      cache.removeCache('token');
      router.push('main');
    };
    return { name, handleExitClick };
  }
});
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px;
}
</style>
