import { customAxios } from 'api'

interface Magazine {
	title: string
	url: string
	image_url: string
}

interface BaseResponse<T> {
	page_total_number: number
	page_number: number
	limit: number
	success: boolean
	data: T
}

async function getMagazines(page: number = 1, limit: number = 10): Promise<BaseResponse<Magazine[]>> {
	const res = await customAxios.get(`/magazines/?limit=${limit}&page=${page}`)
	return res.data
}

const MagazineApi = { getMagazines }

export default MagazineApi
