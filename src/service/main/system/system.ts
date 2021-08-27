import jlRequest from '../../index';
export function getPageListdata(url: string, data: any) {
  return jlRequest.post({
    url,
    data
  });
}

export function deletePagedata(url: string) {
  return jlRequest.delete({
    url
  });
}
//data 新建
export function createPagedata(url: string, data: any) {
  return jlRequest.post({
    url,
    data
  });
}
//data 编辑
export function editPagedata(url: string, data: any) {
  return jlRequest.patch({
    url,
    data
  });
}
