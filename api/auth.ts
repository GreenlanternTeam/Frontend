import { LoginType } from 'types/LoginType'
import { customAxios } from 'api'
import axios from 'axios'

export interface SignUpType {
	userId: string
	password: string
	email: string
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
		nickName?: string
	}
}

export const signUp = async (data: SignUpType): Promise<SignUpResponse> => {
	const { userId, password, email } = data
	return await customAxios.post(
		'/signup',
		{
			userId,
			password,
			email
		},
		{
			withCredentials: true
		}
	)
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
