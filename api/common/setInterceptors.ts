import { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios'
import { getAcessToken, getRefreshToken, setAcessToekn } from 'utils/getToken'
import { customAxios } from 'api'

const setInterceptors = (instance: AxiosInstance): AxiosInstance => {
	const accesstoken = getAcessToken()
	instance.interceptors.request.use(
		function (config: AxiosRequestConfig) {
			if (accesstoken && config.headers) {
				config.headers['Authorization'] = `Bearer ${accesstoken}`
				return config
			} else return config
		},
		function (error: AxiosError) {
			return Promise.reject(error)
		}
	)
	instance.interceptors.response.use(
		function (response) {
			return response
		},
		async (error) => {
			const { config } = error
			if (error.response.status === 401) {
				if (error.response.data.detail === 'Token is invalid or expired') {
					const originalRequest = config
					const refresh_token = getRefreshToken()
					let newToken = ''
					await customAxios.post('/token/refresh/', { refresh_token }).then((res) => {
						if (res.data.success) newToken = res.data.access_token
					})

					if (newToken) {
						originalRequest.headers.Authorization = `Bearer ${newToken}`
						originalRequest.data = { token: newToken }
						return customAxios(originalRequest)
					}
				}
			}
			return Promise.reject(error)
		}
	)
	return instance
}

export default setInterceptors
