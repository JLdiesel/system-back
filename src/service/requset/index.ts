import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { JLRequertInterceptors, JLRequestConfig } from './type';
class JLRequest {
  instance: AxiosInstance;
  interceptors?: JLRequertInterceptors;
  constructor(config: JLRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    //从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
    //添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (res) => {
        console.log('所有实例都有的请求成功拦截器');
        return res;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例都有的响应成功拦截器');
        const data = res.data;

        return data;
      },
      (err) => {
        return err;
      }
    );
  }
  requset<T>(config: JLRequestConfig): Promise<T> {
    return new Promise((resolve, rejecj) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      this.instance
        .request(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          resolve(res as unknown as T);
        })
        .catch((err) => {
          rejecj(err);
        });
    });
  }
  get<T>(config: JLRequestConfig): Promise<T> {
    return this.requset<T>({ ...config, method: 'GET' });
  }
  POST<T>(config: JLRequestConfig): Promise<T> {
    return this.requset<T>({ ...config, method: 'POST' });
  }
  delete<T>(config: JLRequestConfig): Promise<T> {
    return this.requset<T>({ ...config, method: 'DELETE' });
  }
  patch<T>(config: JLRequestConfig): Promise<T> {
    return this.requset<T>({ ...config, method: 'PATCH' });
  }
}

export default JLRequest;