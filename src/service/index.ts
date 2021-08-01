//service同意出口
import JLRequest from './requset';
import { TIME_OUT, BASE_URL } from './requset/config';
export default new JLRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor(config) {
      console.log('请求成功的拦截');
      //可以在这里添加这个请求的token
      /* const token = '';
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      } */
      return config;
    },
    requestInterceptorCatch(err) {
      console.log('请求失败的拦截');

      return err;
    },
    responseInterceptor(config) {
      console.log('响应成功的拦截');

      return config;
    },
    responseInterceptorCatch(err) {
      console.log('响应失败的拦截');

      return err;
    }
  }
});
