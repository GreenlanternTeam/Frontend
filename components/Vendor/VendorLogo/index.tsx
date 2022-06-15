import Image from 'next/image'
import React from 'react'

interface VendorLogoProps {
	url: string
}

const VendorLogo: React.FC<VendorLogoProps> = ({ url }) => {
	return (
		<div className="w-full h-full relative">
			<Image
				style={{ filter: url.includes('Cossac') ? 'invert(1)' : 'inherit' }}
				className="aspect-square w-[40px]"
				src={url}
				unoptimized={true}
				alt="logo"
				layout="responsive"
				width="100%"
				height="100%"
				objectFit="contain"
			/>
		</div>
	)
}

export default VendorLogo
