import type { Axios, AxiosRequestConfig, AxiosResponse } from "axios";

export type HttpRequestConfig<D = any> = AxiosRequestConfig<D>;
export type HttpResponse<T = any, D = any> = AxiosResponse<T, D>;

export interface FulfilledCallback<T> {
  (value: T): T | Promise<T>;
}

export interface RejectedCallback<E = any, R = any> {
  (error: E): R;
}

export interface UseInterceptor<V> {
  (onFulfilled?: FulfilledCallback<V>, onRejected?: RejectedCallback): number;
}
