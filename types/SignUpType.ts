export interface FormValue {
	userId: string
	password: string
	email: string
	password_confirm: string
	nickname: string
}

export interface CheckList {
	id: number
	data: string
	checked: boolean
}

export interface FormIsValid {
	userId: boolean
	password: boolean
	email: boolean
	password_confirm: boolean
	nickname: boolean
}
