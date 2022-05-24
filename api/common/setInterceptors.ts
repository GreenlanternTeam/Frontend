import axios, { AxiosInstance } from 'axios'
import { getAcessToekn } from 'utils/gettoken'

const setInterceptors = (instance: AxiosInstance) => {
	const token = getAcessToekn()
	instance.interceptors.request.use(
		function (config: any) {
			config.headers['Authorizaion'] = `Bearer ${token}`
			return config
		},

		function (error: any) {
			return Promise.reject(error)
		}
	)
}

export default setInterceptors
