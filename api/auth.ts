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
	const { password, email, nickname, password_confirm, agree_14plus, agree_terms, agree_info, agree_recinfo } = data
	return await customAxios.post('/signup', {
		password,
		password2: password_confirm,
		email,
		nickname,
		agree_14plus,
		agree_terms,
		agree_info,
		agree_recinfo
	})
}

export const signin = async (data: LoginType): Promise<SignUpResponse> => {
	const { userId, password } = data
	return await customAxios.post(
		'/login',
		{
			userId,
			password
		},
		{
			withCredentials: true
		}
	)
}
