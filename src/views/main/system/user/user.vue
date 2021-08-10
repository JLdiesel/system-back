<template>
  <div class="user">
    <PageSearch :formConfig="formConfig" />
    <el-table :data="userList" border style="width: 100%">
      <el-table-column prop="name" label="用户名" min-width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { formConfig } from './config/search.config';
import PageSearch from '@/components/pageSearch';
import { useStore } from '@/store';
export default defineComponent({
  components: { PageSearch },
  name: 'user',
  setup() {
    const store = useStore();
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offser: 0,
        size: 10
      }
    });
    const propList = [{ prop: `` }];
    const userList = computed(() => store.state.system.userList);
    const userCount = computed(() => store.state.system.userCount);
    return { formConfig, userList, userCount };
  }
});
</script>

<style scoped lang="less">
.btns {
  text-align: right;
  padding: 0px 50px 20px 0;
}
</style>
