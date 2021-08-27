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
      pageName="role"
      @editBtnClick="handleEditData"
      @newBtnClick="handleNewData"
    ></PageContent>
    <PageModal
      :otherInfo="otherInfo"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      pageName="role"
      :modalConfig="modalConfig"
    >
      <div class="menuTree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        >
        </el-tree>
      </div>
    </PageModal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, nextTick } from 'vue';
import { useStore } from '@/store';
import { contentTableConfig } from './config/content.config';
import { formConfig } from './config/search.config';
import { modalConfig } from './config/modal.config';
import PageSearch from '@/components/pageSearch';
import PageContent from '@/components/pageContent';
import PageModal from '@/components/pageModal';
import usePageSearch from '@/hooks/usePageSearch';
import { useModalClick } from '@/hooks/useModalClick';
import { getMenuLeafKeys } from '@/utils/mapMenus';
import { ElTree } from 'element-plus';
export default defineComponent({
  components: { PageSearch, PageContent, PageModal },
  name: 'role',
  setup() {
    const store = useStore();
    const elTreeRef = ref<InstanceType<typeof ElTree>>();
    const menus = computed(() => store.state.menuList);
    const editCallBack = (item: any) => {
      const leafKeys = getMenuLeafKeys(item.menuList);
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false);
      });
    };
    const [pageContentRef, handleQueryClick, handleResetClick] =
      usePageSearch();
    const { pageModalRef, defaultInfo, handleEditData, handleNewData } =
      useModalClick(undefined, editCallBack);
    const otherInfo = ref({});
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys;
      const halfCheckedKeys = data2.halfCheckedKeys;
      const menuList = [...checkedKeys, ...halfCheckedKeys];
      otherInfo.value = { menuList };
    };
    return {
      contentTableConfig,
      formConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      pageModalRef,
      defaultInfo,
      otherInfo,
      handleEditData,
      handleNewData,
      handleCheckChange,
      modalConfig,
      menus,
      elTreeRef
    };
  }
});
</script>

<style scoped lang="less">
.menuTree {
  margin-left: 60px;
}
</style>
