import BoldText from 'components/Common/BoldText'
import ChevronRight from 'components/Common/ChevronRight'
import SubText from 'components/Common/SubText/index'
import Link from 'next/link'
import React from 'react'
import { classNames } from 'utils/fn'

interface ContentTitleProps {
	title: string
	subTitle: string
	link?: string
	detail?: boolean
}

const ContentTitle: React.FC<ContentTitleProps> = ({ title, subTitle, link, detail }) => {
	return link ? (
		<Link href={link}>
			<a className={classNames('flex w-full flex-col space-y-[5px] text-sm', detail ? 'px-[25px]' : 'px-[30px]')}>
				<div className="flex justify-between items-center w-1/3">
					<BoldText text={title} />
					{/* <ChevronRight /> */}
				</div>
				<SubText text={subTitle} />
			</a>
		</Link>
	) : (
		<div className={classNames('flex w-full flex-col space-y-[5px] text-sm', detail ? 'px-[25px]' : 'px-[30px]')}>
			<div className="flex justify-between items-center w-1/3">
				<BoldText text={title} />
				{/* <ChevronRight /> */}
			</div>
			<SubText text={subTitle} />
		</div>
	)
}

export default ContentTitle
