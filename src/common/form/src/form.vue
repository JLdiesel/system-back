<template>
  <div class="JLForm">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form label-width="100px">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :label="item.label"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  :model-value="modelValue[`${item.filed}`]"
                  v-bind="item.otherOptions"
                  @update:modelValue="handleValueChange($event, item.filed)"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  :model-value="modelValue[`${item.filed}`]"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  @update:modelValue="handleValueChange($event, item.filed)"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-else>
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.filed}`]"
                  @update:modelValue="handleValueChange($event, item.filed)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IFormItem } from '../types';
export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px ' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const handleValueChange = (value: any, filed: string) => {
      emit('update:modelValue', { ...props.modelValue, [filed]: value });
    };
    console.log(props.formItems);

    return { handleValueChange };
  }
});
</script>

<style scoped lang="less">
.JLForm {
  padding-top: 20px;
}
</style>
