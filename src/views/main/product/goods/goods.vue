<template>
  <div class="user">
    <PageSearch
      :formConfig="formConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <PageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="goods"
    >
      <template #image="scope">
        <el-image
          style="width: 80px; height: 80px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          >>
        </el-image>
      </template>
      <template #oldPrice="scope">
        <div>{{ '￥' + scope.row.oldPrice }}</div>
      </template>
      <template #newPrice="scope">
        <div>{{ '￥' + scope.row.newPrice }}</div>
      </template>
    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { formConfig } from './config/search.config';
import PageSearch from '@/components/pageSearch';
import { contentTableConfig } from './config/content.config';
import PageContent from '@/components/pageContent';
import usePageSearch from '@/hooks/usePageSearch';
export default defineComponent({
  components: { PageSearch, PageContent },
  name: 'goods',
  setup() {
    const [pageContentRef, handleQueryClick, handleResetClick] =
      usePageSearch();
    return {
      contentTableConfig,
      formConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef
    };
  }
});
</script>

<style scoped lang="less"></style>
