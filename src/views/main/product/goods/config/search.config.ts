import { IFormItem, IForm } from '@/common/form';

const formItems: IFormItem[] = [
  {
    label: '商品名称',
    placeholder: '请输入商品名称',
    type: 'input',
    filed: 'name'
  },
  {
    label: '商品原价',
    placeholder: '请输入商品原价',
    type: 'input',
    filed: 'oldPrice'
  },
  {
    filed: 'status',
    label: '用户状态',
    placeholder: '请选择用户状态',
    type: 'select',
    options: [
      { title: '启用', value: 1 },
      { title: '禁用', value: 0 }
    ]
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
