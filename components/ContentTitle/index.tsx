import BoldText from 'components/atoms/BoldText'
import ChevronRight from 'components/atoms/ChevronRight'
import SubText from 'components/atoms/SubText/index'
import React from 'react'

interface ContentTitleProps {
	title: string
	subTitle: string
	link?: string
	clickEvent?: () => void
}

const ContentTitle: React.FC<ContentTitleProps> = ({ title, subTitle, clickEvent }) => {
	return (
		<div className="flex w-full px-[30px] flex-col space-y-[5px] text-sm">
			<div className="flex justify-between items-center w-1/3">
				<BoldText text={title} />
				<ChevronRight />
			</div>
			<SubText text={subTitle} />
		</div>
	)
}

export default ContentTitle
