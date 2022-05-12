import ContentTitle from 'components/ContentTitle'
import React from 'react'
import CategoryItem from './CategoryItem'

const MainCategory = () => {
	return (
		<aside className="space-y-3">
			<ContentTitle title="Category" subTitle="관심있는 환경보호 활동을 찾아보세요!" />
			<div className="grid grid-cols-3 w-full h-max">
				<CategoryItem title="Recycled Materials" />
				<CategoryItem title="Low Waste" />
				<CategoryItem title="Saving Water" />
				<CategoryItem title="Locally Produced" />
				<CategoryItem title="Vegan" />
				<CategoryItem title="Plastic Free" />
			</div>
		</aside>
	)
}

export default MainCategory
