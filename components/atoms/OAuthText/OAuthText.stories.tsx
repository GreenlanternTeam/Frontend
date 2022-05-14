import { ComponentStory, ComponentMeta } from '@storybook/react'
import OAuthText from '.'

export default {
	title: 'Atoms/OAuthText',
	component: OAuthText
} as ComponentMeta<typeof OAuthText>
const Template: ComponentStory<typeof OAuthText> = (args) => <OAuthText />
export const Default = Template.bind({})
