import { LoginType } from 'types/LoginType'
import { customAxios, loginCheckAxios } from 'api'
import { LoginResponse } from 'types/LoginType'
import setInterceptors from './common/setInterceptors'
import AuthError from './common/customAuthError'
import { LogOutType } from 'types/authType'

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

export interface SignUpError extends AxiosResponse {
	email?: string
	nickname?: string
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

export const logOut = async (): Promise<LogOutType> => {
	const refresh = localStorage.getItem('refresh_token')
	return await customAxios.post('/logout/', {
		refresh
	})
}

export const checkLogin = async () => {
	if (typeof window !== 'undefined') {
		const token = localStorage.getItem('access_token')
		if (token) {
			return await setInterceptors(loginCheckAxios)
				.post('/token/verify/', { token })
				.then((res) => {
					return res.data
				})
				.catch((err) => {
					localStorage.clear()
					throw new AuthError('세션이 만료되었습니다.', 401, err)
				})
		}
	}
}
