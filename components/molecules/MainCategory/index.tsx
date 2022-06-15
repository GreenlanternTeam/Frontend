import ContentTitle from 'components/ContentTitle'
import Link from 'next/link'
import React from 'react'
import CategoryItem from './CategoryItem'

const MainCategory = () => {
	return (
		<aside className="space-y-3">
			<ContentTitle title="CATEGORY" subTitle="관심있는 환경보호 활동을 찾아보세요!" link="/category/" />
			<div className="grid grid-cols-3 w-full h-max">
				<Link href="/category/recycled">
					<a className="h-[110px] ">
						<CategoryItem type="recycled" hover />
					</a>
				</Link>
				<Link href="/category/lowWaste">
					<a className="h-[110px] ">
						<CategoryItem type="lowWaste" hover />
					</a>
				</Link>
				<Link href="/category/water">
					<a className="h-[110px] ">
						<CategoryItem type="water" hover />
					</a>
				</Link>
				<Link href="/category/produced">
					<a className="h-[110px] ">
						<CategoryItem type="produced" hover />
					</a>
				</Link>
				<Link href="/category/vegan">
					<a className="h-[110px] ">
						<CategoryItem type="vegan" hover />
					</a>
				</Link>
				<Link href="/category/plastic">
					<a className="h-[110px] ">
						<CategoryItem type="plastic" hover />
					</a>
				</Link>
			</div>
		</aside>
	)
}

export default MainCategory
