import { vendorApi } from 'api/ajaxApi'
import { IVendorsResponse } from 'api/VendorApi'
import SearchInput from 'components/Common/SearchInput'
import ContentTitle from 'components/modules/ContentTitle'
import BrandCard from 'components/Vendor/BrandCard'

import Layout from 'layout/layout'
import React, { useEffect, useRef } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useInfiniteQuery } from 'react-query'

const Vendor = () => {
	const {
		data: response,
		hasNextPage,
		isLoading,
		fetchNextPage
	} = useInfiniteQuery<IVendorsResponse>(['vender', 'all'], vendorApi.getVendors, {
		getNextPageParam: (lastPage, _) => (lastPage.page_total_number !== lastPage.page_number ? lastPage.page_number + 1 : undefined)
	})

	// const ref = useRef<HTMLDivElement>(null)
	// const checkIntersect: IntersectionObserverCallback = async ([entry], observer) => {
	// 	console.log(entry)
	// 	if (entry.isIntersecting && ref.current) {
	// 		observer.unobserve(ref.current)
	// 		await fetchNextPage()
	// 		observer.observe(ref.current)
	// 	}
	// }
	// useEffect(() => {
	// 	let observer: IntersectionObserver
	// 	if (ref.current) {
	// 		observer = new IntersectionObserver(checkIntersect, { threshold: 0.3 })
	// 		observer.observe(ref.current)
	// 		console.log(ref.current)
	// 	}
	// 	return () => observer && observer.disconnect()
	// }, [ref])
	return (
		<Layout>
			<section className="bg-[#F6F6F6] min-h-[calc(100vh-75px)] min-w-full py-10 space-y-6">
				<ContentTitle title="BRAND" subTitle="관심있는 브랜드를 찾아보세요!" />
				<div className="px-[30px]">
					<SearchInput />
				</div>
				<div className="px-[30px] space-y-2">
					<div className="w-full flex justify-end">
						<span className="font-light text-xs text-[#999999]">가나다순</span>
						<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2.8125 5.625L7.5 11.25L12.1875 5.625H2.8125Z" fill="#999999" />
						</svg>
					</div>
					{response?.pages && (
						<InfiniteScroll
							dataLength={response?.pages.length}
							next={fetchNextPage}
							hasMore={hasNextPage!}
							loader={<div>Loading...</div>}
							endMessage={<span>Done</span>}
							scrollThreshold={0.9}
							className="space-y-2"
						>
							{response?.pages.map((page) => page.data.map((vendor) => <BrandCard key={vendor.brand_en} vendor={vendor} />))}
						</InfiniteScroll>
					)}
				</div>
			</section>
		</Layout>
	)
}

export default Vendor
