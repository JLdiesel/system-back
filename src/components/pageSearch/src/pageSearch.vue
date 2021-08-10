<template>
  <div class="search">
    <JLForm v-bind="formConfig" v-model="formData">
      <template #header>
        <h2>高级检索</h2>
      </template>
      <template #footer>
        <div class="btns">
          <el-button type="primary" icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </JLForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import JLForm from '@/common/form';
export default defineComponent({
  props: { formConfig: { type: Object, required: true } },
  components: {
    JLForm
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    });
    return { formData };
  }
});
</script>

<style scoped></style>
