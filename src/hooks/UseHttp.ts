// 返回结果
import { getToken } from '@/utils/token.ts';

export type Result<T> = {
  code: string;
  msg: string;
  data: T;
};

// 请求方法
type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

// 请求配置
interface RequestConfig {
  baseUrl?: string;
  timeout?: number;
}

// 请求参数
interface RequestOptions {
  method?: Method;
  headers?: Record<string, string>;
  body?: string;
}

// 创建请求类
class Request {
  // 基础配置
  baseConfig: RequestConfig = {
    baseUrl: import.meta.env.VITE_API_URL,
    timeout: 10000,
  };

  // 请求方法
  public async request<T>(url: string, options: RequestOptions) {
    const { method = 'GET', headers, body } = options;
    const requestUrl = `${this.baseConfig.baseUrl}${url}`;
    const requestOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
        ...headers,
      },
    };
    if (method !== 'GET') {
      requestOptions.body = JSON.stringify(body);
    }
    const response = await fetch(requestUrl, requestOptions);
    const result = await response.json();
    return result as Result<T>;
  }

  // 流式请求
  public async stream(url: string, options: RequestOptions) {
    const { method = 'GET', headers, body } = options;
    const requestUrl = `${this.baseConfig.baseUrl}${url}`;
    const requestOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
        ...headers,
      },
    };
    if (method !== 'GET') {
      requestOptions.body = JSON.stringify(body);
    }
    return await fetch(requestUrl, requestOptions);
  }

  // 文件上传
  public async upload(url: string, options: RequestOptions) {
    const { method = 'POST', headers, body } = options;
    const requestUrl = `${this.baseConfig.baseUrl}${url}`;
    const requestOptions: RequestInit = {
      method,
      headers: {
        Authorization: `Bearer ${getToken()}`,
        ...headers,
      },
    };
    if (method !== 'GET') {
      requestOptions.body = JSON.stringify(body);
    }
    return await fetch(requestUrl, requestOptions);
  }
}

export const Http = new Request();
