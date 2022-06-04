import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import TestInput from './TestInput'

export default {
	title: 'Input',
	Component: TestInput
} as ComponentMeta<typeof TestInput>

const Template: ComponentStory<typeof TestInput> = (args) => <TestInput />

export const Primary = Template.bind({})
