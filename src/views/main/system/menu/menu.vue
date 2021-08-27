<template>
  <div class="menu">
    <PageSearch
      :formConfig="formConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <PageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="menu"
      @newBtnClick="handleNewClick"
      @editBtnClick="handleEditClick"
    ></PageContent>
    <PageModal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
      pageName="menu"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { formConfig } from './config/search.config';
import { modalConfig } from './config/modal.config';
import { contentTableConfig } from './config/content.config';
import PageContent from '@/components/pageContent';
import PageSearch from '@/components/pageSearch';
import PageModal from '@/components/pageModal';
import usePageSearch from '@/hooks/usePageSearch';
import { useModalClick } from '@/hooks/useModalClick';
export default defineComponent({
  components: { PageSearch, PageContent, PageModal },
  name: 'menu',
  setup() {
    const [pageContentRef, handleQueryClick, handleResetClick] =
      usePageSearch();
    const { handleEditData, handleNewData, pageModalRef, defaultInfo } =
      useModalClick();
    return {
      contentTableConfig,
      formConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      handleEditData,
      handleNewData,
      pageModalRef,
      defaultInfo,
      modalConfig
    };
  }
});
</script>

<style scoped lang="less"></style>
