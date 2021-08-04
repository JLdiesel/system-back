<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-accunt ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile"></i> 手机登录</span>
        </template>
        <login-phone ref="phoneRef" />
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
    //LoginAccunt原本是对象，调用InstanceType<typeof LoginAccunt>可以把对象转换为类型
    const accountRef = ref<InstanceType<typeof LoginAccunt>>();
    const phoneRef = ref<InstanceType<typeof LoginPhone>>();
    const iskeepPassword = ref(true);
    const currentTab = ref('account');
    const loginHandleClick = () => {
      console.log('立即登录');
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(iskeepPassword.value);
      } else {
        phoneRef.value?.loginAction();
      }
    };
    return {
      iskeepPassword,
      loginHandleClick,
      accountRef,
      currentTab,
      phoneRef
    };
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
