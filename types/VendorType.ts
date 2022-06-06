export interface Vendor {
	brand_ko: string
	brand_en: string
	logo_url: string | null
	site_url: string
	instagram_url: string | null
	facebook_url: string | null
	country_code: string
	description: string
	category: CategoryKey[]
	range: string[]
}

export type CategoryKey = 'Plastic Free' | 'Vegan' | 'Locally Produced' | 'Saving Water' | 'Low Waste' | 'Recycled Materials'
export type Categories = 'recycled' | 'lowWaste' | 'water' | 'produced' | 'vegan' | 'plastic'
