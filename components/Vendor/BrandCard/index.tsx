import Link from 'next/link'
import React from 'react'
import { Vendor } from 'types/VendorType'
import VendorLogo from '../VendorLogo'
import MainLogo from 'public/icons/mainLogo.svg'
interface BrandCardProps {
	vendor?: Vendor
}

const BrandCard = ({ vendor }: BrandCardProps) => {
	const vendorKind = (vendor?.range.length === 2 ? 'unisex' : vendor?.range[0])?.toLowerCase()
	return (
		<Link href={`/vendor/${vendor?.brand_ko}`}>
			<a className="flex justify-between items-center group bg-white space-x-8 shadow-md rounded-[10px] p-4 py-6">
				<div className="">
					<div className="ring-1 ring-gray-400 group-hover:ring-2 w-[75px] h-[75px] p-4 rounded-full overflow-hidden flex justify-center items-center">
						{vendor?.logo_url ? <VendorLogo url={vendor?.logo_url} /> : <MainLogo />}
					</div>
				</div>

				<div className="flex flex-col w-full relative">
					<span className="text-sm font-light">{vendorKind}</span>
					<span className="font-semibold text-lg">{vendor?.brand_en}</span>
					<span className="font-semibold text-lg">{vendor?.brand_ko}</span>
					<div className="absolute right-0 bottom-0 flex items-center space-x-1">
						<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M4.25 1C2.45535 1 1 2.4404 1 4.2175C1 5.65205 1.56875 9.05675 7.1672 12.4985C7.26748 12.5595 7.38261 12.5918 7.5 12.5918C7.61739 12.5918 7.73252 12.5595 7.8328 12.4985C13.4312 9.05675 14 5.65205 14 4.2175C14 2.4404 12.5446 1 10.75 1C8.95535 1 7.5 2.95 7.5 2.95C7.5 2.95 6.04465 1 4.25 1Z"
								stroke="black"
								strokeOpacity="0.8"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<span className="font-light text-xs opacity-80">50</span>
					</div>
				</div>
			</a>
		</Link>
	)
}

export default BrandCard
