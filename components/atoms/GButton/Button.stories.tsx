import { ComponentStory, ComponentMeta } from '@storybook/react'
import GButton from '.'

export default {
	title: 'Atoms/GButton',
	component: GButton,
	argTypes: {
		text: { type: 'string', defaultValue: '로그인', description: '버튼 텍스트', name: 'text' },
		color: { options: ['white', 'black'], control: { type: 'radio' } }
	}
} as ComponentMeta<typeof GButton>
const Template: ComponentStory<typeof GButton> = (args) => <GButton {...args} />
export const Default = Template.bind({})
