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
					<div className="transition ring-1 ring-gray-400 hover:ring-2 w-[95px] h-[95px] p-4 rounded-full overflow-hidden flex justify-center items-center">
						<div className="w-full h-full relative">
							<Image
								className="aspect-square w-[40px]"
								src={vendor.logo_url}
								unoptimized={true}
								alt="logo"
								layout="responsive"
								width="100%"
								height="100%"
								objectFit="contain"
							/>
						</div>
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
