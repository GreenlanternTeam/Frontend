import { customAxios } from 'api'

export interface SignUpType {
	userId: string
	password: string
	email: string
}

export interface SignUpResponse {
	success: boolean
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
