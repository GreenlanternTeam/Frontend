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
