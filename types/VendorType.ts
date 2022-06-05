export interface Vendor {
	brand_ko: string
	brand_en: string
	logo_url: string | null
	site_url: string | null
	instagram_url: string | null
	facebook_url: string | null
	country_code: string
	description: string
	category: Categories[]
	range: string[]
}

export type Categories = 'recycled' | 'lowWaste' | 'water' | 'produced' | 'vegan' | 'plastic'
