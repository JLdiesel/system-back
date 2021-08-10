<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldChange"
    ></i>
    <div class="content">
      <JLBreadCrumb :breadcrumbs="breadcrumbs" />
      <userInfo></userInfo>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import userInfo from './userInfo.vue';
import JLBreadCrumb, { BreadCrumb } from '@/common/breadcrumb';
import { pathMapBreadcrumbs } from '@/utils/mapMenus';
import { useStore } from '@/store';
export default defineComponent({
  components: { userInfo, JLBreadCrumb },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false);
    const handleFoldChange = () => {
      isFold.value = !isFold.value;
      emit('foldChange', isFold.value);
    };
    //面包屑的数据
    const store = useStore();

    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus;
      const route = useRoute();
      const routePath = route.path;
      return pathMapBreadcrumbs(userMenus, routePath);
    });
    return { isFold, handleFoldChange, breadcrumbs };
  }
});
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  display: flex;
  align-items: center;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    flex: 1;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
