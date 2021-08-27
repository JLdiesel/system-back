<template>
  <div class="search">
    <JLForm v-bind="formConfig" v-model="formData">
      <template #header>
        <h2>高级检索</h2>
      </template>
      <template #footer>
        <div class="btns">
          <el-button
            type="primary"
            icon="el-icon-refresh"
            @click="handleResetClick"
            >重置</el-button
          >
          <el-button
            @click="handleSearchClick"
            type="primary"
            icon="el-icon-search"
            >搜索</el-button
          >
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
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    const formItems = props.formConfig?.formItems ?? [];
    const formOriginData: any = {};
    for (const item of formItems) {
      formOriginData[item.filed] = '';
    }
    const formData = ref(formOriginData);
    const handleResetClick = () => {
      formData.value = formOriginData;
      emit('resetBtnClick');
    };
    const handleSearchClick = () => {
      emit('queryBtnClick', formData.value);
    };
    return { formData, handleResetClick, handleSearchClick };
  }
});
</script>

<style scoped>
.btns {
  text-align: right;
  padding: 0px 50px 20px 0;
}
</style>
