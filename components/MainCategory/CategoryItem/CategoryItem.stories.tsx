import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withKnobs, radios, text } from '@storybook/addon-knobs'
import CategoryItem from '.'

export default {
	title: 'Component/CategoryItem',
	component: CategoryItem,
	argTypes: {
		// type: { type: 'string', description: '카테고리 아이콘', defaultValue: 'lowWaste' },
		type: {
			options: ['recycled', 'lowWaste', 'water', 'produced', 'vegan', 'plastic'],
			control: { type: 'radio' }
		}
	},
	decorators: [
		(Story) => (
			<div style={{ maxWidth: '170px', margin: '0 auto' }}>
				<Story />
			</div>
		),
		withKnobs
	],
	parameters: { actions: { handles: ['click'] } }
} as ComponentMeta<typeof CategoryItem>
const Template: ComponentStory<typeof CategoryItem> = (args) => <CategoryItem {...args} />
export const Recycled = Template.bind({})
Recycled.args = {
	type: 'recycled'
}
export const LowWaste = Template.bind({})
LowWaste.args = {
	type: 'lowWaste'
}
export const Water = Template.bind({})
Water.args = {
	type: 'water'
}
export const Produced = Template.bind({})
Produced.args = {
	type: 'produced'
}
export const Vegan = Template.bind({})
Vegan.args = {
	type: 'vegan'
}
export const Plastic = Template.bind({})
Plastic.args = {
	type: 'plastic'
}

export const Test = () => {
	const options = {
		recycled: 'recycled',
		lowWaste: 'lowWaste',
		water: 'water',
		produced: 'produced',
		vegan: 'vegan',
		plastic: 'plastic'
	}
	// const type = text('type', 'recycled')
	const value = radios('type', options, 'recycled')
	return <CategoryItem type={value} />
}
