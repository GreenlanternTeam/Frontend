import { ComponentStory, ComponentMeta } from '@storybook/react'
import Layout from '.'
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'BasicLayout',
	component: Layout,
	argTypes: {
		layout: {
			options: ['Basic'],
			control: { type: 'radio' }
		}
	} as ComponentMeta<typeof Layout>
}

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args}>{args.children}</Layout>

export const Main = Template.bind({})
// Mast
