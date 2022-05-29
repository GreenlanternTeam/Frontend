interface User {
	email: string
	nickname: string | null
}

export interface IAuthResponse {
	data: {
		access_token: string
		refresh_token: string
		success: boolean
		user: User
	}
}
