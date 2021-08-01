<template>
  <div class="login-phone">
    <el-form label-width="60px" :rules="rules" :model="account">
      <el-form-item label="手机号" prop="phone">
        <el-input autofocus v-model="account.phone" />
      </el-form-item>
      <el-form-item label="密码" prop="verify-code">
        <el-input v-model="account.verifyCode" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { rules } from '../config/phone-config';
export default defineComponent({
  setup() {
    const account = reactive({
      phone: '',
      verifyCode: ''
    });
    return { account, rules };
  }
});
</script>

<style scoped></style>
