import React from 'react'

interface ButtonProps {
	text: string
	color?: 'white' | 'black'
}

const BButton: React.FC<ButtonProps> = ({ text, color = 'black' }) => {
	return (
		<button style={{ color }} className="w-[81px] h-[30px] rounded-[5px] bg-[#F7F2DC] border-[1px] border-solid border-black mt-[25px]">
			{text}
		</button>
	)
}

export default BButton
