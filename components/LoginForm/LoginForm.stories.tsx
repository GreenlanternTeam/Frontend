import { ComponentStory, ComponentMeta } from '@storybook/react'

import LoginForm from '.'

export default {
	title: 'LoginForm',
	component: LoginForm,
	argTypes: {
		email: '이메일을 입력하세요',
		pwd: '패스워드를 입력하세요'
	}
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Bye = Template.bind({})
Bye.args = {
	email: '이메일을 입력하세요',
	pwd: '패스워드를 입력하세요'
}
export const Hi = Template.bind({})
Hi.args = {
	email: '이메일을 입력하세요',
	pwd: '패스워드를 입력하세요'
}
