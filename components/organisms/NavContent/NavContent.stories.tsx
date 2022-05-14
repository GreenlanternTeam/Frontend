import { ComponentStory, ComponentMeta } from '@storybook/react'
import NavContent from '.'

export default {
	title: 'Molecules/NavContent',
	component: NavContent
} as ComponentMeta<typeof NavContent>
const Template: ComponentStory<typeof NavContent> = (args) => <NavContent />
export const Default = Template.bind({})
