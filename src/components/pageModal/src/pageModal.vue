<template>
  <div class="page-modal">
    <el-dialog title="新建用户" v-model="dialogVisible" width="30%" center>
      <Form v-bind="modalConfig" v-model="formData"></Form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleConfirmClick"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import Form from '@/common/form/src/form.vue';
import { useStore } from 'vuex';
export default defineComponent({
  components: { Form },
  props: {
    modalConfig: { type: Object, required: true },
    defaultInfo: { type: Object, default: () => ({}) },
    pageName: {
      type: String,
      required: true
    },
    otherInfo: { type: Object, default: () => ({}) }
  },
  setup(props) {
    const dialogVisible = ref(false);
    const formData = ref<any>({});

    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.filed}`] = newValue[`${item.filed}`];
        }
      }
    );
    const store = useStore();
    const handleConfirmClick = () => {
      if (Object.keys(props.defaultInfo).length) {
        //编辑
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        });
        dialogVisible.value = false;
      } else {
        //新建
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        });
        dialogVisible.value = false;
      }
    };

    return { dialogVisible, formData, handleConfirmClick };
  }
});
</script>

<style scoped></style>
