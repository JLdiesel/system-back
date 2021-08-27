//service同意出口
import JLRequest from './requset';
import cache from '@/utils/cache';

import { TIME_OUT, BASE_URL } from './requset/config';

export default new JLRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor(config) {
      //可以在这里添加这个请求的token
      const token = cache.getCache('token');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    requestInterceptorCatch(err) {
      return err;
    },
    responseInterceptor(config) {
      return config;
    },
    responseInterceptorCatch(err) {
      return err;
    }
  }
});
