export const contentTableConfig = {
  header: '商品',
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '100' },
    { prop: 'oldPrice', label: '原价', minWidth: '80', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价', minWidth: '80', slotName: 'newPrice' },
    { prop: 'imgUrl', label: '图片', minWidth: '100', slotName: 'image' },
    { prop: 'status', label: '状态', minWidth: '100', slotName: 'status' },
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
    }
  ],
  showTableIndex: true,
  showSelect: true
};
