import { IForm } from '@/common/form';

export const modalConfig: IForm = {
  formItems: [
    {
      label: '部门负责人',
      placeholder: '请输入人名',
      type: 'input',
      filed: 'name'
    },
    {
      label: '部门归属',
      placeholder: '请输入部门归属',
      type: 'input',
      filed: 'intro'
    }
  ],
  itemStyle: { padding: '10px 40px ' },
  colLayout: { span: 24 }
};
