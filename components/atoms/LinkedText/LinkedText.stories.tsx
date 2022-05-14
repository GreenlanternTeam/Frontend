import { ComponentStory, ComponentMeta } from '@storybook/react'
import LinkedText from '.'

export default {
	title: 'Atoms/LinkedText',
	component: LinkedText,
	argTypes: {
		text: { type: 'string', defaultValue: 'Linked Text', description: 'Text', name: 'Text' },
		href: { type: 'string', defaultValue: '/', description: '이동할 url', name: 'url' }
	}
} as ComponentMeta<typeof LinkedText>
const Template: ComponentStory<typeof LinkedText> = (args) => <LinkedText {...args} />
export const Default = Template.bind({})
