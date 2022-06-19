import React from 'react'

interface ButtonProps {
	text: string
	color?: 'white' | 'black'
	handleClick?: () => void
	[key: string]: any
}

const BButton: React.FC<ButtonProps> = ({ text, color = 'black', handleClick, ...rest }) => {
	return (
		<button
			onClick={handleClick}
			style={{ color }}
			className="w-[81px] h-[30px] rounded-[5px] bg-[#F7F2DC] border-[1px] border-solid border-black"
			{...rest}
		>
			{text}
		</button>
	)
}

export default BButton
