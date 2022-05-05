import React from 'react'

interface InputProps {
	type?: string
	placeholder?: string
	label?: string
}

const Input: React.FC<InputProps> = ({ type = 'text', placeholder, label }) => {
	return (
		<>
			{label && <label>{label}</label>}
			<input
				className="placeholder-shown:border-[rgba(153,153,153,0.6)] placeholder:text-[#999999] placeholder:font-light placeholder:opacity-60 w-full min-w-[275px] h-[50px] px-[20px] focus:outline-none focus:border-[1px] focus:border-[#000000] rounded-[5px] border-[1px] border-[#000000] transition-all "
				type={type}
				placeholder={placeholder}
			/>
		</>
	)
}

export default Input
