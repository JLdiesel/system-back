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
        console.log(
          config.headers.Authorization ===
            'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImNvZGVyd2h5Iiwicm9sZSI6eyJpZCI6MSwibmFtZSI6Iui2hee6p-euoeeQhuWRmCJ9LCJpYXQiOjE2Mjg2MDMzODgsImV4cCI6MTYzMTE5NTM4OH0.RC_ZOnA783RdztpPL_eovrQJ9noF8j0uttFqII9FwC7MsY53zyVnExB2Hor5Rj23D8TLgBmmTCFzZ5EuzVmTOwjGKsKfuGlsAmlxmqLKpbeqZBpp46p3qn_sydFLVCVDwCGPKgMSOTtkvLSuSJr07pGL-ESYWc68ej_p9Kdil5U'
        );
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
