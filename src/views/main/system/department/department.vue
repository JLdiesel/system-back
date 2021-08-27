<template>
  <div class="role">
    <PageSearch
      :formConfig="formConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <PageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="department"
      @editBtnClick="handleEditData"
      @newBtnClick="handleNewData"
    ></PageContent>
    <PageModal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      pageName="department"
      :modalConfig="modalConfig"
    ></PageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { contentTableConfig } from './config/content.config';
import { formConfig } from './config/search.config';
import { modalConfig } from './config/modal.config';
import PageSearch from '@/components/pageSearch';
import PageContent from '@/components/pageContent';
import PageModal from '@/components/pageModal';

import usePageSearch from '@/hooks/usePageSearch';
import { useModalClick } from '@/hooks/useModalClick';
export default defineComponent({
  components: { PageSearch, PageContent, PageModal },
  name: 'department',
  setup() {
    const [pageContentRef, handleQueryClick, handleResetClick] =
      usePageSearch();
    const { pageModalRef, defaultInfo, handleEditData, handleNewData } =
      useModalClick();
    return {
      contentTableConfig,
      formConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      pageModalRef,
      defaultInfo,
      handleEditData,
      handleNewData,
      modalConfig
    };
  }
});
</script>

<style scoped lang="less"></style>
