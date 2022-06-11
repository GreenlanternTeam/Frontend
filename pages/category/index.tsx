import ContentTitle from 'components/ContentTitle'
import CategoryCard from 'components/molecules/CategoryCard'
import Layout from 'layout/layout'
import React from 'react'

const Category = () => {
	return (
		<Layout>
			<section className="bg-[#F6F6F6] min-h-[calc(100vh-75px)] min-w-full py-10 space-y-10">
				<ContentTitle title="Category" subTitle="관심있는 환경보호 활동을 찾아보세요!" detail />

				<aside className="px-[25px] space-y-[15px]">
					<CategoryCard
						type="recycled"
						text="글로벌 재활용 표준 및 국가별 인증에 따라 사용 후 분해되도록 설계된 소비 후 폐기물로 제작되었어요!"
						link
					/>
					<CategoryCard
						type="lowWaste"
						text="글로벌 재활용 표준 및 국가별 인증에 따라 사용 후 분해되도록 설계된 소비 후 폐기물로 제작되었어요!"
						link
					/>
					<CategoryCard type="water" text="공급망을 따라 수원을 보호하고 수질 오염을 방지한다구요!" link />
					<CategoryCard
						type="vegan"
						text="글로벌 재활용 표준 및 국가별 인증에 따라 사용 후 분해되도록 설계된 소비 후 폐기물로 제작되었어요!"
						link
					/>
					<CategoryCard
						type="produced"
						text="글로벌 재활용 표준 및 국가별 인증에 따라 사용 후 분해되도록 설계된 소비 후 폐기물로 제작되었어요!"
						link
					/>
					<CategoryCard
						type="plastic"
						text="글로벌 재활용 표준 및 국가별 인증에 따라 사용 후 분해되도록 설계된 소비 후 폐기물로 제작되었어요!"
						link
					/>
				</aside>
			</section>
		</Layout>
	)
}

export default Category
