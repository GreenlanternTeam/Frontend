import GrayDescription from 'components/atoms/GrayDescription'
import CategoryItem from 'components/molecules/MainCategory/CategoryItem'
import Link from 'next/link'
import React from 'react'
import { Categories } from 'types/VendorType'

interface CategoryCard {
	text: string
	type: Categories
	link?: boolean
}

const CategoryCard: React.FC<CategoryCard> = ({ text, type, link }) => {
	return link ? (
		<Link href={`/category/${type}`}>
			<a className=" flex justify-between items-center rounded-[10px] cursor-pointer bg-white hover:bg-[#F7F2DC] p-4 space-x-[20px] transition-all">
				<div>
					<CategoryItem type={type} disabled xs />
				</div>
				<GrayDescription text={text} />
			</a>
		</Link>
	) : (
		<div className=" flex justify-between items-center rounded-[10px] cursor-pointer bg-white px-5 hover:bg-[#F7F2DC] transition-all">
			<div>
				<CategoryItem type={type} disabled xs />
			</div>
			<GrayDescription text={text} />
		</div>
	)
}

export default CategoryCard
