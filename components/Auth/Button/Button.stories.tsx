import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import StyledButton from './Button'

export default {
	title: 'Button',
	Component: StyledButton,
	argTypes: {
		text: { control: 'text' }
	}
} as ComponentMeta<typeof StyledButton>

const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args} />

export const Primary = Template.bind({})

Primary.args = {
	text: 'text'
}
