import BoldText from 'components/atoms/BoldText'
import ChevronRight from 'components/atoms/ChevronRight'
import SubText from 'components/atoms/SubText/index'
import Link from 'next/link'
import React from 'react'

interface ContentTitleProps {
	title: string
	subTitle: string
	link?: string
}

const ContentTitle: React.FC<ContentTitleProps> = ({ title, subTitle, link }) => {
	return link ? (
		<Link href={link}>
			<a className="flex w-full px-[30px] flex-col space-y-[5px] text-sm">
				<div className="flex justify-between items-center w-1/3">
					<BoldText text={title} />
					{/* <ChevronRight /> */}
				</div>
				<SubText text={subTitle} />
			</a>
		</Link>
	) : (
		<div className="flex w-full px-[30px] flex-col space-y-[5px] text-sm">
			<div className="flex justify-between items-center w-1/3">
				<BoldText text={title} />
				{/* <ChevronRight /> */}
			</div>
			<SubText text={subTitle} />
		</div>
	)
}

export default ContentTitle
