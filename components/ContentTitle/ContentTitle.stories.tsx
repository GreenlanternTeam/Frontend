import { ComponentStory, ComponentMeta } from '@storybook/react'

import ContentTitle from '.'

export default {
	title: 'Component/ContentTitle',
	component: ContentTitle,
	argTypes: {
		title: { type: 'string', defaultValue: 'Title Here', description: '메인페이지 컨텐츠 헤더 타이틀', name: 'Title' },
		subTitle: { type: 'string', defaultValue: 'SubTitle Here', description: '컨텐츠에 대한 간단한 설명란', name: 'SubTitle' },
		link: { type: 'string', description: '디테일 페이지 라우팅' }
	}
} as ComponentMeta<typeof ContentTitle>

const Template: ComponentStory<typeof ContentTitle> = (args) => <ContentTitle {...args} />

export const CategoryTitle = Template.bind({})
CategoryTitle.args = {
	title: 'Category',
	subTitle: '관심있는 환경보호 활동을 찾아보세요!'
}
export const BrandTitle = Template.bind({})
BrandTitle.args = {
	title: 'Brand',
	subTitle: '관심있는 브랜드를 찾아보세요!'
}

export const MagazineTitle = Template.bind({})
MagazineTitle.args = {
	title: 'Magazine',
	subTitle: '다양한 환경 이슈를 만나보세요!'
}
