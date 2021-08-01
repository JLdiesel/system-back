import { AxiosRequestConfig, AxiosResponse } from 'axios';

interface JLRequertInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (error: any) => any;
}
interface JLRequestConfig extends AxiosRequestConfig {
  interceptors?: JLRequertInterceptors;
}

export { JLRequertInterceptors, JLRequestConfig };
