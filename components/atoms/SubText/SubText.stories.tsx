import { ComponentStory, ComponentMeta } from '@storybook/react'
import SubText from '.'

export default {
	title: 'Atoms/SubText',
	component: SubText,
	argTypes: {
		text: { type: 'string', defaultValue: 'Sub Text', description: '서브 택스트입니다.', name: 'Text' }
	}
} as ComponentMeta<typeof SubText>
const Template: ComponentStory<typeof SubText> = (args) => <SubText {...args} />
export const Default = Template.bind({})
