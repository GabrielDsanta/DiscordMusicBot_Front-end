import axios, { AxiosResponse } from 'axios'

export const requester = (config: any, contentType?: string): any => {
  const service = axios.create({
    baseURL: config.baseURL || 'https://api.spotify.com/v1',
    ...config.options,
  })

  service.interceptors.request.use(
    (req) => {
      req.headers = {
        'Content-Type': contentType || 'application/json',
        Authorization: config.Authorization || window.localStorage.access_token,
        ...config.headers,
      }

      return req
    },
    (error) => Promise.reject(error),
  )

  service.interceptors.response.use(
    (res) => res,
    (error) => {
      if (
        error.response.status === 401 &&
        window.location.pathname !== '/logout'
      ) {
        return (window.location.href = '/logout')
      }
    },
  )
  service.interceptors.response.use(
    (res) => res,
    (error) => {
      if (
        error.response.status === 401 &&
        window.location.pathname === '/logout'
      ) {
        return (window.location.href = '/logout')
      }
    },
  )
  return {
    async get<T = any>(uri: string): Promise<AxiosResponse<T>> {
      const response = await service.get<T>(uri)
      return response
    },
    async post<T = any>(uri: string, data: any): Promise<AxiosResponse<T>> {
      const response = await service.post<T>(uri, data)
      return response
    },
    async put<T = any>(uri: string, data: any): Promise<AxiosResponse<T>> {
      const response = await service.put<T>(uri, data)
      return response
    },
    async patch<T = any>(uri: string, data: any): Promise<AxiosResponse<T>> {
      const response = await service.patch<T>(uri, data)
      return response
    },
    async delete<T = any>(uri: string, data: any): Promise<AxiosResponse<T>> {
      const response = await service.delete<T>(uri, data)
      return response
    },
  }
}
