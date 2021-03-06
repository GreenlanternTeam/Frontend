export interface FormValue {
	password: string
	email: string
	password_confirm: string
	nickname: string
	agree_recinfo: boolean
}

export interface FormIsValid {
	password: boolean
	email: boolean
	password_confirm: boolean
	nickname: boolean
}

export interface CheckBoxType {
	allcheck: boolean
	agree_14plus: boolean
	agree_terms: boolean
	agree_info: boolean
	agree_recinfo: boolean
}
