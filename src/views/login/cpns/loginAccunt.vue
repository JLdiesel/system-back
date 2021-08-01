<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input autofocus v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus';
import { defineComponent, reactive, ref } from 'vue';
import { rules } from '../config/account-config';
export default defineComponent({
  setup() {
    const formRef = ref<InstanceType<typeof ElForm>>();
    const account = reactive({
      name: '',
      password: ''
    });

    const loginAction = () => {
      formRef.value?.validate((valid) => {
        console.log(valid);
      });
      console.log('account登录');
    };

    return { account, rules, loginAction, formRef };
  }
});
</script>

<style scoped></style>
