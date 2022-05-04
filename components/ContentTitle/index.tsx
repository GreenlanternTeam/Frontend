import Link from 'next/link'
import React from 'react'

interface ContentTitleProps {
	title: string
	subTitle: string
	link?: string
}

const ContentTitle: React.FC<ContentTitleProps> = ({ title, subTitle, link }) => {
	return (
		<div className="flex w-full px-[30px] flex-col space-y-[5px] text-sm">
			<div className="flex justify-between items-center w-1/3">
				<h1 className="font-semibold text-lg">{title}</h1>
				<Link href={link ?? '/'} passHref>
					<svg className="w-4 h-4 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
					</svg>
				</Link>
			</div>
			<h3 className="">{subTitle}</h3>
		</div>
	)
}

export default ContentTitle
