import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Vendor } from 'types/VendorType'

interface BrandItemProps {
	vendor?: Vendor
}
const BrandItem: React.FC<BrandItemProps> = ({ vendor }) => {
	return (
		<Link href={`/vendor/${vendor?.brand_ko}`}>
			<a className="flex flex-col justify-center items-center">
				{vendor?.logo_url ? (
					<div className="transition ring-1 ring-gray-400 hover:ring-2 w-[95px] h-[95px] rounded-full overflow-hidden flex justify-center items-center">
						<Image src={vendor.logo_url} unoptimized={true} alt="logo" width={80} height={80} />
					</div>
				) : (
					<div className="bg-gray-400 w-[95px] h-[95px] rounded-full" />
				)}

				<span className="h-[42px] mt-[10px] text-center">{vendor?.brand_ko}</span>
			</a>
		</Link>
	)
}

export default BrandItem
