import ContentTitle from 'components/ContentTitle'
import React from 'react'
import BrandItem from './BrandItem'

const MainBrand = () => {
	return (
		<aside>
			<ContentTitle title="Brand" subTitle="관심있는 브랜드를 찾아보세요!" />
			<div className="grid grid-cols-3 w-full gap-[20px] p-[25px]">
				{[...new Array(9)].map((_, idx) => (
					<BrandItem key={idx} brand="유니클로" />
				))}
			</div>
		</aside>
	)
}

export default MainBrand
