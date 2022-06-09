export const getValidate = (a: any, b: any) => a === b

let timer: NodeJS.Timeout | null = null

const debounce = async (fn: any, ms = 500) => {
	function exec() {
		fn.apply()
	}
	if (timer) {
		clearTimeout(timer)
	}
	if (typeof fn === 'function' && typeof ms === 'number') {
		timer = setTimeout(exec, ms)
	}
}

export { debounce }

export function classNames(...classNames: string[]) {
	return classNames.filter((className) => className).join(' ')
}

export function decodeJWT(token: string) {
	const buff = Buffer.from(token!.split('.')[1], 'base64').toString()
	const payload = JSON.parse(buff)
	const id = payload.user_id
	return id
}

export function uuid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0,
			v = c == 'x' ? r : (r & 0x3) | 0x8
		return v.toString(16)
	})
}
