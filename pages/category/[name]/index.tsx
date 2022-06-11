import CategoryItem from 'components/MainCategory/CategoryItem'
import Layout from 'layout/layout'
import { GetServerSideProps, NextPage } from 'next'

import React from 'react'
import { Categories } from 'types/VendorType'
import * as CategoriData from 'components/MainCategory/CategoryItem/utils'
interface CategoryDetailProps {
	type: Categories
}

const CategoryDetail: NextPage<CategoryDetailProps> = ({ type }) => {
	const catrgory = CategoriData.noneApiCategory[type]

	return (
		<Layout>
			<section className="flex flex-col space-y-6">
				<div className="bg-[#F7F2DC] aspect-[16/11] flex justify-center items-center">
					<div>
						<CategoryItem type={type} disabled lgIcon />
					</div>
				</div>
				<div className="w-[70%] text-center mx-auto">
					<span>{catrgory.description}</span>
				</div>
			</section>
		</Layout>
	)
}

// export default ProtectRouter(CategoryDetail)

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const list = ['recycled', 'lowWaste', 'water', 'produced', 'vegan', 'plastic']
	const query = ctx.query.name as Categories
	if (!query || !list.includes(query)) {
		return {
			redirect: {
				permanent: false,
				destination: '/category'
			}
		}
	}
	return {
		props: { type: query }
	}
}

export default CategoryDetail
