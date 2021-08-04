<template>
  <div class="login-phone">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="手机号" prop="phone">
        <el-input autofocus v-model="account.phone" />
      </el-form-item>
      <el-form-item label="密码" prop="verify-code">
        <el-input show-password v-model="account.verifyCode" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { defineComponent, reactive, ref } from 'vue';
import { rules } from '../config/phone-config';
export default defineComponent({
  setup() {
    const store = useStore();
    const formRef = ref();
    const account = reactive({
      phone: '',
      verifyCode: ''
    });
    const loginAction = () => {
      console.log(123);
      store.dispatch('login/phoneLoginAction', { ...account });
    };
    return { account, rules, formRef, loginAction };
  }
});
</script>

<style scoped></style>
