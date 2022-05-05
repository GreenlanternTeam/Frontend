import { ComponentStory, ComponentMeta } from '@storybook/react'
import NavTitle from '.'

export default {
	title: 'Atoms/NavTitle',
	component: NavTitle,
	argTypes: {
		text: { type: 'string', defaultValue: 'home', description: 'Text', name: 'Text' }
	}
} as ComponentMeta<typeof NavTitle>
const Template: ComponentStory<typeof NavTitle> = (args) => <NavTitle {...args} />
export const Default = Template.bind({})
