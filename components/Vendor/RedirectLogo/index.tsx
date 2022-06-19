import Link from 'next/link'
import React from 'react'
import VendorLogo from '../VendorLogo'
import MainLogo from 'public/icons/mainLogo.svg'
interface RedirectLogoProps {
	siteUrl: string
	logoUrl?: string | null
}

const RedirectLogo: React.FC<RedirectLogoProps> = ({ siteUrl, logoUrl }) => {
	return (
		<Link href={siteUrl.includes('https') ? siteUrl : siteUrl.includes('http') ? siteUrl : `https://${siteUrl}`}>
			<a target="_blank">
				<div
					className=" bg-white w-[75px] h-[75px] p-3 rounded-full overflow-hidden flex justify-center items-center"
					style={{ overflow: 'hidden' }}
				>
					{logoUrl ? <VendorLogo url={logoUrl} /> : <MainLogo />}
				</div>
			</a>
		</Link>
	)
}

export default RedirectLogo
