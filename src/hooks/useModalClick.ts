import { ref } from 'vue';
import PageModal from '@/components/pageModal';
type callBackType = (item?: any) => void;
export function useModalClick(
  newCallBack?: callBackType,
  editCallBack?: callBackType
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>();
  const defaultInfo = ref({});
  //点击了改变按钮
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item };
    //弹窗
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }
    editCallBack && editCallBack(item);
  };
  const handleNewData = () => {
    defaultInfo.value = {};
    //弹窗
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }
    newCallBack && newCallBack();
  };
  return { handleEditData, handleNewData, pageModalRef, defaultInfo };
}
