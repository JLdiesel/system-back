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
      pageName="users"
      @editBtnClick="handleEditData"
      @newBtnClick="handleNewData"
    ></PageContent>
    <PageModal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      pageName="users"
      :modalConfig="modalConfigRef"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue';
import { formConfig } from './config/search.config';
import PageSearch from '@/components/pageSearch';
import { IFormItem } from '@/common/form';
import { contentTableConfig } from './config/content.config';
import { modalConfig } from './config/modal.config';
import PageContent from '@/components/pageContent';
import PageModal from '@/components/pageModal';
import usePageSearch from '@/hooks/usePageSearch';
import { useModalClick } from '@/hooks/useModalClick';
import { useStore } from 'vuex';
export default defineComponent({
  components: { PageSearch, PageContent, PageModal },
  name: 'users',
  setup() {
    const [pageContentRef, handleQueryClick, handleResetClick] =
      usePageSearch();
    const modalConfigRef = ref(modalConfig);
    //处理密码是否显示的逻辑
    const newCallBack = () => {
      const passwordItem = modalConfigRef.value.formItems.find(
        (item) => item.filed === 'password'
      );
      if (passwordItem) {
        passwordItem.isHidden = false;
      }
    };
    const editCallBack = () => {
      const passwordItem = modalConfigRef.value.formItems.find(
        (item) => item.filed === 'password'
      );
      if (passwordItem) {
        passwordItem.isHidden = true;
      }
    };
    //动态添加部门和角色列表
    const store = useStore();
    const departmentItem: any = modalConfigRef.value.formItems.find(
      (item: IFormItem) => item.filed === 'departmentId'
    );

    const roleItem: any = modalConfigRef.value.formItems.find(
      (item: IFormItem) => item.filed === 'roleId'
    );

    departmentItem.options = computed(() =>
      store.state.entireDepartments.map((item: any) => ({
        title: item.name,
        value: item.id
      }))
    );
    roleItem.options = computed(() =>
      store.state.entireRole.map((item: any) => ({
        title: item.name,
        value: item.id
      }))
    );

    //调用hook获取公共变量和函数
    const { handleEditData, handleNewData, pageModalRef, defaultInfo } =
      useModalClick(newCallBack, editCallBack);
    return {
      contentTableConfig,
      formConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      modalConfigRef,
      handleEditData,
      handleNewData,
      pageModalRef,
      defaultInfo
    };
  }
});
</script>

<style scoped lang="less"></style>
