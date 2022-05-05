import { ComponentStory, ComponentMeta } from '@storybook/react'
import NavIcon from '.'

export default {
	title: 'Atoms/NavIcon',
	component: NavIcon,
	argTypes: {
		title: { options: ['home', 'about', 'category', 'brand', 'magazine'], control: { type: 'radio' }, defaultValue: 'home' }
	}
} as ComponentMeta<typeof NavIcon>
const Template: ComponentStory<typeof NavIcon> = (args) => <NavIcon {...args} />
export const Default = Template.bind({})
