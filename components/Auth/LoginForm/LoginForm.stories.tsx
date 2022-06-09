import { ComponentStory, ComponentMeta } from '@storybook/react'

import LoginForm from '.'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'LoginForm',
	component: LoginForm,
	argTypes: {
		email: '이메일을 입력하세요',
		pwd: '패스워드를 입력하세요'
	} as ComponentMeta<typeof LoginForm>
}

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />

export const Bye = Template.bind({})
