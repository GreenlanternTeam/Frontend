import axios from 'axios'

const customAxios = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		'Content-type': 'application/json'
	}
})

/*customAxios.defaults.withCredentials = true*/

export { customAxios }
