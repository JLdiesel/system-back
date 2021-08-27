import { IFormItem, IForm } from '@/common/form';

const formItems: IFormItem[] = [
  {
    label: '角色名',
    placeholder: '请输入角色名',
    type: 'input',
    filed: 'name'
  },
  {
    label: '权限',
    placeholder: '请输入权限',
    type: 'input',
    filed: 'intro'
  },
  {
    filed: 'createAt',
    label: '创建时间',
    placeholder: '请选择创建时间范围',
    type: 'datepicker',
    otherOptions: {
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      type: 'daterange'
    }
  }
];

export const formConfig: IForm = {
  formItems
};
