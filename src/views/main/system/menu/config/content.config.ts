export const contentTableConfig = {
  header: '菜单',
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '100' },
    { prop: 'type', label: '类型', minWidth: '60' },
    {
      prop: 'url',
      label: '菜单url',
      minWidth: '100'
    },
    {
      prop: 'icon',
      label: '图标',
      minWidth: '100'
    },
    {
      prop: 'permission',
      label: '权限',
      minWidth: '100'
    },
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
    {
      label: '操作',
      minWidth: '100',
      slotName: 'handle'
    }
  ],
  showTableIndex: false,
  showSelect: false,
  showFooter: false,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  }
};
