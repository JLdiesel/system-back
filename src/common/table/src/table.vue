<template>
  <div class="jl-header">
    <div class="header">
      <slot name="header">
        <div class="title">{{ header }}列表</div>
        <div class="hanler">
          <slot name="headerHandler">
            <el-button type="primary" size="medium">新建{{ header }}</el-button>
            <el-button icon="el-icon-refresh"></el-button>
          </slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="data"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column v-if="showSelect" type="selection"></el-table-column>
      <el-table-column
        v-if="showTableIndex"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="item in propList" :key="item.prop">
        <el-table-column
          align="center"
          :prop="item.prop"
          :label="item.label"
          :min-width="item.minWidth"
          show-overflow-tooltip
        >
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
          <!-- 作用域插槽 scope.row[item.prop]
           <template #default="scope">
          <el-button>{{ scope.row[item.prop] }} </el-button>
        </template> -->
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-sizes="[10, 20, 30]"
          :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="dataCount"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    data: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    },
    showTableIndex: {
      type: Boolean,
      default: false
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    showSelect: {
      type: Boolean,
      default: false
    },
    header: {
      type: String
    },
    dataCount: {
      type: Number
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 })
    },
    childrenProps: { type: Object, default: () => ({}) }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    const handleSelectionChange = (val: any) => {
      emit('selectionChange', val);
    };
    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize });
    };
    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage });
    };
    return {
      handleSelectionChange,
      handleSizeChange,
      handleCurrentChange
    };
  }
});
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 20px;
    font-weight: 700;
  }
  .handler {
    align-items: center;
  }
}
.footer {
  margin-top: 15px;
  .el-pagination {
    text-align: right;
  }
}
</style>
