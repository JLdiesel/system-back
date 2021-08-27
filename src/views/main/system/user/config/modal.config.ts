import { IForm } from '@/common/form';

export const modalConfig: IForm = {
  formItems: [
    {
      label: '用户名',
      placeholder: '请输入用户名',
      type: 'input',
      filed: 'name'
    },
    {
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      type: 'input',
      filed: 'realname'
    },
    {
      label: '密码',
      placeholder: '请输入密码',
      type: 'input',
      filed: 'password',
      isHidden: false
    },
    {
      label: '电话号码',
      placeholder: '请输入电话号码',
      type: 'input',
      filed: 'cellphone'
    },
    {
      label: '选择角色',
      placeholder: '请选择角色',
      type: 'select',
      filed: 'roleId',
      options: [
        { title: '用户', value: 0 },
        { title: '管理员', value: 1 }
      ]
    },
    {
      label: '选择部门',
      placeholder: '请选择部门',
      type: 'select',
      filed: 'departmentId',
      options: [
        { title: '用户', value: 0 },
        { title: '禁用', value: 1 }
      ]
    }
  ],
  itemStyle: { padding: '10px 40px ' },
  colLayout: { span: 24 }
};
