export function generate4Code(key: number) {
	let data = key.toFixed()
	const len = data.length
	let zeros: string = ''
	for (let i = 0; i < 4 - len; i++) {
		zeros += '0'
	}
	data = zeros + data
	return data
}
