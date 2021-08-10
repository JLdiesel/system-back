import { IFormItem, IForm } from '@/common/form';

const formItems: IFormItem[] = [
  {
    label: '用户名',
    placeholder: '请输入用户名',
    type: 'input',
    filed: 'name'
  },
  {
    label: '密码',
    placeholder: '请输入密码',
    type: 'password',
    filed: 'password'
  },
  {
    filed: 'sport',
    label: '喜欢的运动',
    placeholder: '请选择喜欢的运动',
    type: 'select',
    options: [
      { title: '篮球', value: 'basketball' },
      { title: '足球', value: 'football' }
    ]
  },
  {
    filed: 'createTime',
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
const colLayout = {
  xl: 6,
  lg: 8,
  md: 12,
  sm: 24,
  xs: 24
};
const itemStyle = {
  color: 'pink'
};
export const formConfig: IForm = {
  itemStyle,
  colLayout,
  formItems
};
