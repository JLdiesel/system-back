<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input autofocus v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus';
import { defineComponent, reactive, ref } from 'vue';
import { rules } from '../config/account-config';
import cache from '@/utils/cache';
import { useStore } from 'vuex';
export default defineComponent({
  setup() {
    const store = useStore();
    const formRef = ref<InstanceType<typeof ElForm>>();
    const account = reactive({
      name: cache.getCache('name') ?? '',
      password: cache.getCache('password') ?? ''
    });

    const loginAction = (iskeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        //1判断是否需要记住密码
        if (valid) {
          if (iskeepPassword) {
            //本地缓存
            cache.setCache('name', account.name);
            cache.setCache('password', account.password);
          }
        }
        //2登录验证
        store.dispatch('login/accountLoginAction', { ...account });
      });
      console.log('account登录');
    };

    return { account, rules, loginAction, formRef };
  }
});
</script>

<style scoped></style>
