import ContentTitle from 'components/ContentTitle'
import React from 'react'
import CategoryItem from './CategoryItem'

const MainCategory = () => {
	return (
		<aside className="space-y-3">
			<ContentTitle title="Category" subTitle="관심있는 환경보호 활동을 찾아보세요!" link="/category/detail" />
			<div className="grid grid-cols-3 w-full h-max">
				<CategoryItem type="recycled" />
				<CategoryItem type="lowWaste" />
				<CategoryItem type="water" />
				<CategoryItem type="produced" />
				<CategoryItem type="vegan" />
				<CategoryItem type="plastic" />
			</div>
		</aside>
	)
}

export default MainCategory
