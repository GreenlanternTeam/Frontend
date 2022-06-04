import { setAcessToekn } from './../utils/getToken'
import { useDispatch } from 'react-redux'
import { LoginType } from 'types/LoginType'
import { customAxios } from 'api'
import { LoginResponse } from 'types/LoginType'
import setInterceptors from './common/setInterceptors'
import AuthError from './common/customAuthError'
import { decodeJWT } from 'utils/fn'

export interface SignUpType {
	nickname: string
	password: string
	email: string
	password_confirm: string
	allcheck: boolean
	agree_14plus: boolean
	agree_terms: boolean
	agree_info: boolean
	agree_recinfo: boolean
}

interface AxiosResponse {
	success: boolean
}

export interface SignUpResponse extends AxiosResponse {
	User?: {
		id: number
		userId: string
		password: string
		email: string
		nickname?: string
	}
}

export const signUp = async (data: SignUpType): Promise<SignUpResponse> => {
	const { password, email, nickname, password_confirm, agree_14plus, agree_terms, agree_info, agree_recinfo } = data
	return await customAxios.post('/signup/', {
		password1: password,
		password2: password_confirm,
		email: email,
		nickname,
		agree_14plus,
		agree_terms,
		agree_info,
		agree_recinfo
	})
}

export const login = async (data: LoginType): Promise<LoginResponse> => {
	const { email, password } = data
	return await customAxios
		.post('/login/', {
			email,
			password
		})
		.then((res) => res.data)
}

export const checkLogin = async () => {
	if (typeof window !== 'undefined') {
		const token = localStorage.getItem('access_token')
		if (token) {
			const buff = Buffer.from(token!.split('.')[1], 'base64').toString()
			const payload = JSON.parse(buff)
			const id = payload.user_id
			if (id) {
				return await setInterceptors(customAxios)
					.get(`/users/${id}`)
					.then((res) => {
						return res.data
					})
					.catch((err) => {
						if (err.response.status === 401) {
							if (typeof window !== 'undefined') {
								console.log(err)
								const refresh_token = localStorage.getItem('refresh_token')
								customAxios
									.post('/token/refresh/', { refresh_token })
									.then(async (res) => {
										setAcessToekn(res.data.access_token)
										const id = decodeJWT(res.data.access_token)
										console.log(res.data.access_token)
										await setInterceptors(customAxios)
											.get(`/users/${id}`)
											.then((res) => {
												return res.data
											})
									})
									.catch((err) => {
										localStorage.clear()
										throw new AuthError('세션이 만료되었습니다.', 401, err)
									})
							}
						}
					})
			}
		}
	}
}
