import { vendorApi } from 'api/ajaxApi'
import { IVendorsResponse } from 'api/VendorApi'
import ContentTitle from 'components/ContentTitle'
import React, { useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import BrandItem from './BrandItem'

const MainBrand = () => {
	const {
		data: response,
		hasNextPage,
		fetchNextPage
	} = useInfiniteQuery<IVendorsResponse>(['vender', 'all'], vendorApi.getVendors, {
		getNextPageParam: (lastPage, _) => (lastPage.page_total_number !== lastPage.page_number ? lastPage.page_number + 1 : undefined)
	})
	useEffect(() => {
		return () => console.log('MainBrand Component Unmount')
	}, [])

	return (
		<aside>
			<ContentTitle title="BRAND" subTitle="관심있는 브랜드를 찾아보세요!" />
			<div className="grid grid-cols-3 w-full gap-[20px] p-[25px]">
				{response?.pages.map((page) => page.data.map((vendor) => <BrandItem key={vendor.brand_en} vendor={vendor} />))}
			</div>
			{hasNextPage && (
				<div className="flex justify-center w-full">
					<svg
						onClick={() => fetchNextPage()}
						className="w-6 h-6 cursor-pointer animate-pulse animate-bounce"
						viewBox="0 0 200 200"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20.4501 66.1625C22.7942 63.8191 25.9731 62.5027 29.2876 62.5027C32.6022 62.5027 35.781 63.8191 38.1251 66.1625L100 128.038L161.875 66.1625C164.233 63.8855 167.39 62.6256 170.668 62.6541C173.945 62.6826 177.08 63.9972 179.398 66.3148C181.715 68.6324 183.03 71.7675 183.059 75.045C183.087 78.3225 181.827 81.48 179.55 83.8375L108.838 154.55C106.494 156.893 103.315 158.21 100 158.21C96.6856 158.21 93.5067 156.893 91.1626 154.55L20.4501 83.8375C18.1067 81.4934 16.7903 78.3146 16.7903 75C16.7903 71.6855 18.1067 68.5066 20.4501 66.1625V66.1625Z"
							fill="black"
						/>
					</svg>
				</div>
			)}
		</aside>
	)
}

export default MainBrand
