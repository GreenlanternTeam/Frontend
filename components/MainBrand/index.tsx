import { vendorApi } from 'api/ajaxApi'
import { IVendorsResponse } from 'api/VendorApi'
import ContentTitle from 'components/ContentTitle'
import React, { useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import BrandItem from './BrandItem'

const MainBrand = () => {
	const {
		data: response,
		isLoading,
		refetch,
		hasNextPage,
		fetchNextPage
	} = useInfiniteQuery<IVendorsResponse>(['vender', 'all'], vendorApi.getVendors, {
		getNextPageParam: (lastPage, pages) => (lastPage.page_total_number !== lastPage.page_number ? lastPage.page_number + 1 : undefined)
	})
	useEffect(() => {
		return () => console.log('OO')
	}, [])

	return (
		<aside>
			<ContentTitle title="Brand" subTitle="관심있는 브랜드를 찾아보세요!" />
			<div className="grid grid-cols-3 w-full gap-[20px] p-[25px]">
				{response?.pages.map((page) => page.data.map((vendor) => <BrandItem key={vendor.brand_en} vendor={vendor} />))}
			</div>
			{hasNextPage && (
				<div className="flex justify-center w-full">
					<svg
						onClick={() => fetchNextPage()}
						className="w-6 h-6 cursor-pointer animate-pulse animate-bounce"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path>
					</svg>
				</div>
			)}
		</aside>
	)
}

export default MainBrand
