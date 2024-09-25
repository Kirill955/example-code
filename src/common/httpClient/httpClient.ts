import axios, { Axios } from "axios";

import { HttpRequestConfig, HttpResponse } from "./types";

class HttpClient {
  protected readonly instance: Axios;

  constructor(config?: HttpRequestConfig) {
    this.instance = axios.create(config);
  }

  request<T = any, R = HttpResponse<T>, D = any>(
    config: HttpRequestConfig<D>
  ): Promise<R> {
    return this.instance.request<T, R, D>(config);
  }

  get<T = any, R = HttpResponse<T>, D = any>(
    url: string,
    config?: HttpRequestConfig<D>
  ): Promise<R> {
    return this.instance.get<T, R, D>(url, config);
  }

  patch<T = any, R = HttpResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: HttpRequestConfig<D>
  ): Promise<R> {
    return this.instance.patch<T, R, D>(url, data, config);
  }

  post<T = any, R = HttpResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: HttpRequestConfig<D>
  ): Promise<R> {
    return this.instance.post<T, R, D>(url, data, config);
  }

  put<T = any, R = HttpResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: HttpRequestConfig<D>
  ): Promise<R> {
    return this.instance.put<T, R, D>(url, data, config);
  }

  delete<T = any, R = HttpResponse<T>, D = any>(
    url: string,
    config?: HttpRequestConfig<D>
  ): Promise<R> {
    return this.instance.delete<T, R, D>(url, config);
  }
}

export { HttpClient };
