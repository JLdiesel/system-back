import { IForm } from '@/common/form';

export const modalConfig: IForm = {
  formItems: [
    {
      label: '角色名',
      placeholder: '请输入角色名',
      type: 'input',
      filed: 'name'
    },
    {
      label: '权限介绍',
      placeholder: '请输入权限介绍',
      type: 'input',
      filed: 'intro'
    }
  ],
  itemStyle: { padding: '10px 40px ' },
  colLayout: { span: 24 }
};
