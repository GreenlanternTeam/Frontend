import { ComponentStory, ComponentMeta } from '@storybook/react'
import NavWrapper from '.'

export default {
	title: 'Molecules/NavWrapper',
	component: NavWrapper,
	argTypes: {
		title: {
			defaultValue: 'home'
		}
	}
} as ComponentMeta<typeof NavWrapper>
const Template: ComponentStory<typeof NavWrapper> = (args) => <NavWrapper {...args} />
export const Default = Template.bind({})
