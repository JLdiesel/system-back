<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import JLRequest from './service';
interface DataType {
  data: any;
  returnCode: string;
  success: boolean;
}
export default defineComponent({
  name: 'App',
  setup() {
    onMounted(() => {
      JLRequest.get<DataType>({
        url: '/home/multidata'
      }).then((res) => {
        console.log(res.data);
        console.log(res.returnCode);
        console.log(res.success);
      });
    });
    return {};
  }
});
</script>

<style lang="less">
.app {
  width: 100%;
  height: 100%;
}
</style>
