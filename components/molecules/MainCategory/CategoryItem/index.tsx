import SubText from 'components/atoms/SubText'
import React, { useState } from 'react'
import { Categories, CategoryKey } from 'types/VendorType'
import { classNames } from 'utils/fn'
import * as Icons from './utils'

export interface CategoryItemProps {
	type?: Categories
	disabled?: boolean
	api?: boolean
	xs?: boolean
	lgIcon?: boolean
	hover?: boolean
}

const CategoryItem: React.FC<CategoryItemProps> = ({ type = 'lowWaste', disabled, api = false, xs, lgIcon, hover }) => {
	const [state, setState] = useState(false)
	// const category = api ? Icons.CategoryData.find((c) => c.title === api) ?? Icons.CategoryData[0] : Icons.noneApiCategory[type]
	const category = Icons.noneApiCategory[type]
	const { href, title, id, blob } = category
	// xs ? "space-y-[5px]" : ""
	return (
		<div
			className={classNames(
				'w-full h-full aspect-square flex flex-col items-center justify-center transition-all duration-300',
				lgIcon ? 'space-y-[20px]' : 'opacity-[0.6]',
				state ? 'bg-[#F6F2DC] opacity-100' : '',
				api ? 'bg-[#F6F2DC] opacity-100' : '',
				// xs ? 'space-y-[5px]' : ''
				'space-y-[5px]',
				hover ? 'hover:bg-[#F6F2DC] hover:opacity-100' : ''
			)}
			onClick={() => !disabled && setState((prev) => !prev)}
		>
			<svg
				width={lgIcon ? '60' : '40'}
				height={lgIcon ? '60' : '40'}
				viewBox={lgIcon ? '0 0 60 60' : '0 0 40 40'}
				fill="black"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				// className={classNames(xs ? '' : 'h-full')}
			>
				<rect width={lgIcon ? '60' : '40'} height={lgIcon ? '60' : '40'} fill={`url(#pattern${id})`} />
				<defs>
					<pattern id={`pattern${id}`} patternContentUnits="objectBoundingBox" width="1" height="1">
						<use xlinkHref={`#${href}`} transform="scale(0.0166667)" />
					</pattern>
					<image id={href} width="60" height="60" xlinkHref={blob} />
				</defs>
			</svg>
			<SubText
				className={classNames(
					'leading-4 text-center font-medium',
					xs ? 'text-xs' : 'text-sm',
					lgIcon ? 'w-fit text-xl font-bold' : 'w-[50px]'
				)}
				text={title}
			/>
		</div>
	)
}

export default CategoryItem
