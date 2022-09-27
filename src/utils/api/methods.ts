import { AxiosResponse } from 'axios';
import {client } from './client';

export const apiGet = async <T>(
  url: string,  
  axiosSettings?: Record<string, unknown>
): Promise<AxiosResponse<T>> => {

  return client.get<T>(url, { ...axiosSettings });
};

export const apiPut = async <T, K>(url: string, payload: T, axiosSettings?: Record<string, unknown>
): Promise<AxiosResponse<K>> => {

  return client.put<K>(url, payload, { ...axiosSettings });
};

export const apiPost = async <T, K>(url: string, payload: T, axiosSettings?: Record<string, unknown>
): Promise<AxiosResponse<K>> => {

  return client.post<K>(url, payload, { ...axiosSettings });
};

export const apiDelete = async <T>(url: string, axiosSettings?: Record<string, unknown>): Promise<AxiosResponse<T>> => {

  return client.delete<T>(url, { ...axiosSettings });
};
