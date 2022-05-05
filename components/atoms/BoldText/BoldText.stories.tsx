import { ComponentStory, ComponentMeta } from '@storybook/react'
import BoldText from '.'

export default {
	title: 'Atoms/BoldText',
	component: BoldText,
	argTypes: {
		text: { type: 'string', defaultValue: 'Bold Text', description: 'Bold 스타일 택스트입니다.', name: 'Text' }
	}
} as ComponentMeta<typeof BoldText>
const Template: ComponentStory<typeof BoldText> = (args) => <BoldText {...args} />
export const Default = Template.bind({})
