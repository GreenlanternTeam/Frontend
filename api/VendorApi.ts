import { commonAxios } from 'api'
import { Vendor } from '../types/VendorType'
export interface IVendorsResponse {
	success: boolean
	status_message: string
	vendor_count: number
	limit: number
	page_number: number
	page_total_number: number
	data: Vendor[]
}

export interface IVendorDetailResponse {
	success: boolean
	status_message: string
	data: {
		vendor: Vendor
		relative: Vendor[] | []
	}
}

const getVendors = async ({ pageParam = 1 }, count: number = 9) => {
	return await commonAxios.get<IVendorsResponse>(`/vendors/?page=${pageParam}&limit=${count}`).then((res) => res.data)
}

const getVendorDetail = async (name: string) => {
	return await commonAxios.get<IVendorDetailResponse>(`vendors/${name}`).then((res) => res.data)
}

export { getVendors, getVendorDetail }
