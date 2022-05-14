import { ComponentStory, ComponentMeta } from '@storybook/react'
import ChevronRight from '.'

export default {
	title: 'Atoms/ChevronRight',
	component: ChevronRight,
	argTypes: {
		link: { type: 'string', defaultValue: '/', description: '클릭이벤트 핸들링 url', name: 'link' }
	}
} as ComponentMeta<typeof ChevronRight>
const Template: ComponentStory<typeof ChevronRight> = (args) => <ChevronRight {...args} />
export const Default = Template.bind({})
