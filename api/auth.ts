import { LoginType } from 'types/LoginType'
import { customAxios } from 'api'

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
	console.log('안녕')
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

export const login = async (data: LoginType): Promise<SignUpResponse> => {
	const { email, password } = data
	return await customAxios.post('/login/', {
		email,
		password
	})
}

export const kakaoLogin = async (code: string): Promise<SignUpResponse> => {
	return await customAxios.get('/oauthkakao/login/', {
		headers: {
			Params: code
		}
	})
}
