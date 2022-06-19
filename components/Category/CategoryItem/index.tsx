import SubText from 'components/Common/SubText'
import React, { useState } from 'react'
import { Categories } from 'types/VendorType'
import { classNames } from 'utils/fn'
import * as Icons from '../utils'

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
	const category = Icons.noneApiCategory[type]
	const { href, title, id, blob } = category
	return (
		<div
			className={classNames(
				'w-full h-full aspect-square flex flex-col items-center justify-center transition-all duration-300',
				lgIcon ? 'space-y-[20px]' : 'opacity-[0.6]',
				state ? 'bg-[#F6F2DC] opacity-100' : '',
				api ? 'bg-[#F6F2DC] opacity-100' : '',
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
