import axios from 'axios'

const customAxios = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL
})

/*customAxios.defaults.withCredentials = true*/

export { customAxios }
