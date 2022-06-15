import React from 'react'

interface ButtonProps {
	text: string
	color?: 'white' | 'black'
}

const GButton: React.FC<ButtonProps> = ({ text, color = 'white' }) => {
	return (
		<button style={{ color }} className="w-full min-w-[275px] h-[50px] rounded-[5px] bg-[#346053]">
			{text}
		</button>
	)
}

export default GButton
