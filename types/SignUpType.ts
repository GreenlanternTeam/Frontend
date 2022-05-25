export interface FormValue {
	password: string
	email: string
	password_confirm: string
	nickname: string
	allcheck: boolean
	agree_14plus: boolean
	agree_terms: boolean
	agree_info: boolean
	agree_recinfo: boolean
}

export interface FormIsValid {
	userId: boolean
	password: boolean
	email: boolean
	password_confirm: boolean
	nickname: boolean
}

export interface LoginResponse {
	success: boolean
	access_token: string
	refresh_token: string
	user: object
}
