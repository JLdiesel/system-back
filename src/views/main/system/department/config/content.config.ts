export const contentTableConfig = {
  header: '部门',
  propList: [
    { prop: 'name', label: '部门名', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '100',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '100',
      slotName: 'updateAt'
    },
    { prop: 'leader', label: '部门负责人', minWidth: '100' },
    {
      label: '操作',
      minWidth: '100',
      slotName: 'handle'
    }
  ],
  showTableIndex: false,
  showSelect: false
};
