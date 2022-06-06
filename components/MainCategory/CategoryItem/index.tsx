import SubText from 'components/atoms/SubText'
import React, { useState } from 'react'
import { Categories, CategoryKey } from 'types/VendorType'
import * as Icons from './utils'

export interface CategoryItemProps {
	type?: Categories
	disabled?: boolean
	api?: CategoryKey
}

const CategoryItem: React.FC<CategoryItemProps> = ({ type = 'lowWaste', disabled, api = false }) => {
	const [state, setState] = useState(false)
	const category = api ? Icons.CategoryData.find((c) => c.title === api) ?? Icons.CategoryData[0] : Icons.noneApiCategory[type]
	const { href, title, id, blob } = category
	return (
		<div
			className={`w-full h-[110px] aspect-square flex flex-col items-center opacity-[0.6] transition-all duration-300 ${
				state ? 'bg-[#F6F2DC] opacity-100' : ''
			}`}
			onClick={() => !disabled && setState((prev) => !prev)}
		>
			<svg
				width="40"
				height="40"
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				className="h-full"
			>
				<rect width="40" height="40" fill={`url(#pattern${id})`} />
				<defs>
					<pattern id={`pattern${id}`} patternContentUnits="objectBoundingBox" width="1" height="1">
						<use xlinkHref={`#${href}`} transform="scale(0.0166667)" />
					</pattern>
					<image id={href} width="60" height="60" xlinkHref={blob} />
				</defs>
			</svg>
			<SubText className="text-sm leading-4 h-[65px] w-[50px] text-center font-medium" text={title} />
		</div>
	)
}

export default CategoryItem
