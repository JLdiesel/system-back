export const rules = {
  name: [
    { required: true, message: '手机号不能为空', trigger: 'blur' },
    {
      pattern: /^[0-9]{10,11}$/,
      message: '手机号码格式不正确',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,}$/,
      message: '用户名过于简单必须为5位以上的字母',
      trigger: 'blur'
    }
  ]
};
