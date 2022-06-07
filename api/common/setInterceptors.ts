import { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios'
import { getAcessToken, getRefreshToken, setAcessToekn } from 'utils/getToken'
import { customAxios } from 'api'
import moment from 'moment'

const refresh = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
	const refresh_token = getRefreshToken()
	const expiresAt = localStorage.getItem('expiresAt')
	let token = getAcessToken()
	const body = {
		refresh_token
	}

	console.log(moment(expiresAt).diff(moment()))

	if (moment(expiresAt).diff(moment()) < 0 && refresh_token) {
		try {
			await customAxios.post('/token/refresh/', body).then((res) => {
				setAcessToekn(res.data.access_token)
				localStorage.setItem('expiresAt', moment().add(5, 'minutes').format('yyyy-MM-DD HH:mm:ss'))
			})
		} catch (err) {
			console.log(err)
		}
	}

	if (token && config.headers) {
		config.headers['Authorization'] = `Bearer ${token}`
		return config
	} else return config
}

const setInterceptors = (instance: AxiosInstance): AxiosInstance => {
	instance.interceptors.request.use(refresh, function (error: AxiosError) {
		return Promise.reject(error)
	})
	return instance
}

export default setInterceptors
