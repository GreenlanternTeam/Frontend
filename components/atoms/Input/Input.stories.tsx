import { ComponentStory, ComponentMeta } from '@storybook/react'

import Input from '.'

export default {
	title: 'Atoms/Input',
	component: Input,
	argTypes: {
		type: { description: 'input type', options: ['text', 'password', 'email', 'number'], control: { type: 'radio' } },
		label: { type: 'string', description: '컨텐츠에 대한 간단한 설명란', name: 'Label' },
		placeholder: { type: 'string', description: 'placeholder 가 있을경우 기입', name: 'placeholder', defaultValue: '아이디' }
	}
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />
export const Default = Template.bind({})
