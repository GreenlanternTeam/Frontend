import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Vendor } from 'types/VendorType'
import MainLogo from 'public/icons/mainLogo.svg'
import VendorLogo from 'components/atoms/VendorLogo'

interface BrandItemProps {
	vendor?: Vendor
}
const BrandItem: React.FC<BrandItemProps> = ({ vendor }) => {
	return (
		<Link href={`/vendor/${vendor?.brand_ko}`}>
			<a className="flex flex-col justify-center items-center">
				<div className="transition ring-1 ring-gray-400 hover:ring-2 w-[95px] h-[95px] p-4 rounded-full overflow-hidden flex justify-center items-center">
					{vendor?.logo_url ? <VendorLogo url={vendor?.logo_url} /> : <MainLogo />}
				</div>

				<span className="h-[42px] mt-[10px] text-center">{vendor?.brand_ko}</span>
			</a>
		</Link>
	)
}

export default BrandItem
