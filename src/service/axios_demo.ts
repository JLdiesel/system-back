import JLRequest from './index';
/* axios
  .get('http://123.207.32.32:8000/home/multidata', {})
  .then((res: AxiosResponse<any>) => {
    console.log(res.data);
  }); */
interface DataType {
  data: any;
  returnCode: string;
  success: boolean;
}

JLRequest.requset<DataType>({
  url: '/home/multidata',
  method: 'GET'
}).then((res) => {
  console.log(res.data);
  console.log(res.returnCode);
  console.log(res.success);
});
