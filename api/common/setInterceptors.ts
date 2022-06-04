import { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios'
import { getAcessToekn, getRefreshToken } from 'utils/getToken'
import { customAxios } from 'api'
import moment from 'moment'

const refresh = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
	const refreshToken = getRefreshToken()
	const expireAt = localStorage.getItem('expireAt')
	let token = getAcessToekn()

	if (moment(expireAt).diff(moment()) < 0 && refreshToken) {
		const body = {
			refreshToken
		}
		if (token) {
			const buff = Buffer.from(token!.split('.')[1], 'base64').toString()
			const payload = JSON.parse(buff)
			const id = payload.user_id
			return await customAxios.get(`/users/${id}`).then((res) => {
				return res.data
			})
		}
	}
}

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
