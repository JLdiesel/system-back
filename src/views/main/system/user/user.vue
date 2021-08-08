<template>
  <div class="user">
    <div class="search">
      <JLForm v-bind="formConfig" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import JLForm from '@/common/form';
import { formConfig } from './config/search.config';
export default defineComponent({
  components: {
    JLForm
  },
  name: 'user',
  setup() {
    return { formConfig };
  }
});
</script>

<style scoped></style>
