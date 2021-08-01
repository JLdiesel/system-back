<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-accunt ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-mobile"></i> 手机登录</span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="iskeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" @click="loginHandleClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LoginAccunt from './loginAccunt.vue';
import LoginPhone from './loginPhone.vue';

export default defineComponent({
  components: { LoginAccunt, LoginPhone },

  setup() {
    const accountRef = ref<InstanceType<typeof LoginAccunt>>();
    const iskeepPassword = ref(true);
    const loginHandleClick = () => {
      console.log('立即登录');
      accountRef.value?.loginAction();
    };
    return { iskeepPassword, loginHandleClick, accountRef };
  }
});
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  .title {
    text-align: center;
  }
  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
