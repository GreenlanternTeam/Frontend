import axios from 'axios'

const customAxios = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		'Access-Control-Allow-Origin': 'http://localhost:4000/',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
	}
})

customAxios.defaults.withCredentials = true

export { customAxios }
