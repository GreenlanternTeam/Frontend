import axios from 'axios'
import setInterceptors from './common/setInterceptors'

const customAxios = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		'Content-type': 'application/json'
	}
})

function createAxios() {
	const ins = axios.create({
		baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
		headers: {
			'Content-type': 'application/json'
		}
	})
	return setInterceptors(ins)
}

const authAxios = createAxios()

export { customAxios, authAxios }
