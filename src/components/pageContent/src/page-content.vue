<template>
  <div class="content">
    <jl-table
      @selectionChange="handleChange"
      :data="dataList"
      v-bind="contentTableConfig"
      :dataCount="dataCount"
      v-model:page="page"
    >
      <template #status="scope">
        <el-button
          plain
          size="mini"
          :type="scope.row.enable || scope.row.status ? 'success' : 'danger'"
        >
          {{ scope.row.enable || scope.row.status ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span> {{ $filters.formatTime(scope.row.createAt) }} </span>
      </template>
      <template #updateAt="scope">
        <span> {{ $filters.formatTime(scope.row.updateAt) }} </span>
      </template>

      <template #handle="scope">
        <div>
          <el-button
            v-if="isUpdate"
            icon="el-icon-edit"
            type="text"
            size="mini"
            @click="handleEditClick(scope.row)"
          >
            编辑
          </el-button>
          <el-button
            @click="hanldeDeleteClick(scope.row)"
            v-if="isDelete"
            icon="el-icon-delete"
            type="text"
            size="mini"
          >
            删除
          </el-button>
        </div>
      </template>
      <!-- 在page-content中动态插入剩余的插槽 -->
      <template
        v-for="item in otherPropsSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
      <template #headerHandler>
        <el-button
          v-if="isCreate"
          @click="handleNewClick"
          type="primary"
          size="medium"
        >
          创建用户
        </el-button>
      </template>
      <!--  <template #header>
          <h3>用户</h3>
        </template>
        <template #footer>
          <h5>底部</h5>
        </template> -->
    </jl-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watchEffect } from 'vue';
import JlTable from '@/common/table';
import { useStore } from '@/store';
import { usePermission } from '@/hooks/usePermission';
export default defineComponent({
  components: {
    JlTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const store = useStore();
    //分页
    const page = ref({ currentPage: 1, pageSize: 10 });
    //权限获取
    const isCreate = usePermission(props.pageName, 'create');
    const isUpdate = usePermission(props.pageName, 'update');
    const isDelete = usePermission(props.pageName, 'delete');
    const isQuery = usePermission(props.pageName, 'query');
    //发送vuex action获取页面数据
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (page.value.currentPage - 1) * page.value.pageSize,
          size: page.value.pageSize,
          ...queryInfo
        }
      });
    };
    getPageData();
    watchEffect(() => {
      if (!isQuery) return;
      getPageData();
    });
    //获取vuex页面数据
    const dataList = computed(() =>
      store.getters['system/pageListData'](props.pageName)
    );
    const dataCount = computed(() =>
      store.getters['system/pageListCount'](props.pageName)
    );
    const handleChange = (val: any) => {
      console.log(val);
    };
    //创建非公共插槽
    const otherPropsSlots = props.contentTableConfig.propList.filter(
      (item: { slotName: string; prop: string }) => {
        if (
          item.slotName === 'status' ||
          item.slotName === 'createAt' ||
          item.slotName === 'updateAt' ||
          item.slotName === 'handle'
        ) {
          return false;
        }
        return true;
      }
    );
    //删除编辑新建
    const hanldeDeleteClick = (item: any) => {
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      });
    };
    const handleNewClick = () => {
      emit('newBtnClick');
    };
    const handleEditClick = (item: any) => {
      emit('editBtnClick', item);
    };
    return {
      dataList,
      // userCount,
      handleChange,
      getPageData,
      dataCount,
      page,
      otherPropsSlots,
      isCreate,
      isDelete,
      isUpdate,
      hanldeDeleteClick,
      handleEditClick,
      handleNewClick
    };
  }
});
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
