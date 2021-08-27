import { ref } from 'vue';
import PageContent from '@/components/pageContent';
export default function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>();
  const handleResetClick = () => {
    pageContentRef.value?.getPageData();
  };
  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo);
  };
  return [pageContentRef, handleQueryClick, handleResetClick];
}
