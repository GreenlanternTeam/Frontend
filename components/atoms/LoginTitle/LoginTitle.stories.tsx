import { ComponentStory, ComponentMeta } from '@storybook/react'
import LoginTitle from '.'

export default {
	title: 'Atoms/LoginTitle',
	component: LoginTitle,
	argTypes: {
		text: { type: 'string', defaultValue: 'LoginTitle Text', description: 'Text', name: 'Text' }
	}
} as ComponentMeta<typeof LoginTitle>
const Template: ComponentStory<typeof LoginTitle> = (args) => <LoginTitle {...args} />
export const Default = Template.bind({})
