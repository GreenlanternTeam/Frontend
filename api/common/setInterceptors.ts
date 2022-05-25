import { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios'
import { getAcessToekn } from 'utils/getToken'

const setInterceptors = (instance: AxiosInstance): AxiosInstance => {
	const token = getAcessToekn()
	instance.interceptors.request.use(
		function (config: AxiosRequestConfig): AxiosRequestConfig | void {
			if (token && config.headers) {
				config.headers['Authorization'] = `Bearer ${token}`
				return config
			} else return config
		},
		function (error: AxiosError) {
			return Promise.reject(error)
		}
	)
	return instance
}

export default setInterceptors
