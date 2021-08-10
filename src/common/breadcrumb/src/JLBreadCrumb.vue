<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <template v-for="item in breadcrumbs" :key="item.name">
      <el-breadcrumb-item :to="{ path: item.path }">{{
        item.name
      }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { BreadCrumb } from '../types';
export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<BreadCrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
