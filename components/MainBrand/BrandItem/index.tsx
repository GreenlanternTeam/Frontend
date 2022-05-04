import React from 'react'

interface BrandItemProps {
	brand?: string
}
const BrandItem: React.FC<BrandItemProps> = ({ brand }) => {
	return (
		<div className="flex flex-col justify-center items-center cursor-pointer">
			<div className="bg-gray-400 w-[95px] h-[95px] rounded-full" />
			<span className="h-[42px] mt-[10px] text-center">{brand ?? 'undefined name'}</span>
		</div>
	)
}

export default BrandItem
