import { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios'
import { getAcessToekn, getRefreshToken, setAcessToekn } from 'utils/getToken'
import { customAxios } from 'api'
import moment from 'moment'
import AuthError from './customAuthError'

const refresh = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
	const refreshToken = getRefreshToken()
	const expiresAt = localStorage.getItem('expiresAt')
	let token = getAcessToekn()
	/*
	if (moment(expiresAt).diff(moment()) < 0 && refreshToken) {
		console.log('d')
		const body = {
			refreshToken
		}

		customAxios
			.post('/token/refresh/', body)
			.then((res) => {
				setAcessToekn(res.data.access_token)
				localStorage.setItem('expiresAt', moment().add(5, 'minutes').format('yyyy-MM-DD HH:mm:ss'))
			})
			.catch((err) => {
				localStorage.clear()
				throw new AuthError('세션이 만료되었습니다.', 401, err)
			})
	}
	*/
	if (token && config.headers) {
		config.headers['Authorization'] = `Bearer ${token}`
		return config
	} else return config
}

const setInterceptors = (instance: AxiosInstance): AxiosInstance => {
	const token = getAcessToekn()
	instance.interceptors.request.use(refresh, function (error: AxiosError) {
		return Promise.reject(error)
	})
	return instance
}

export default setInterceptors
