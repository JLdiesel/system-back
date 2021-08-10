import jlRequest from '../../index';
export function getPageListdata(url: string, data: any) {
  return jlRequest.post({
    url,
    data
  });
}
