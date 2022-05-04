import { ComponentStory, ComponentMeta } from '@storybook/react'

import Head from './index'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'Head',
	component: Head,
	argTypes: {
		title: 'hi'
	} as ComponentMeta<typeof Head>
}

const Template: ComponentStory<typeof Head> = (args) => <Head />

export const Bye = Template.bind({})
