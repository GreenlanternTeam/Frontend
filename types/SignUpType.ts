export interface FormValue {
	userId: string
	password: string
	email: string
	password_confirm: string
	nickname: string
	allcheck: boolean
}

export interface CheckList {
	id: number
	data: string
	checked: boolean
	key: string
}

export interface FormIsValid {
	userId: boolean
	password: boolean
	email: boolean
	password_confirm: boolean
	nickname: boolean
}
