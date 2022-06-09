import axios from 'axios'

const customAxios = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		'Content-type': 'application/json'
	}
})
const commonAxios = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		'Content-type': 'application/json'
	}
})

const loginCheckAxios = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		'Content-type': 'application/json'
	},
	timeout: 10000,
	params: {}
})

export { customAxios, loginCheckAxios, commonAxios }
