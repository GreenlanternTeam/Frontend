export interface LoginType {
	email: string
	password: string
}

export interface LoginFormIsValid {
	password: boolean
	email: boolean
}

export interface LoginResponse {
	success: boolean
	access_token: string
	refresh_token: string
	user: object
}

export interface LoginError {
	success: boolean
	email?: string
	password?: string
}
