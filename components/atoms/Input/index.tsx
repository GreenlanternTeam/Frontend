import Timer from 'components/Timer/Timer'
import React from 'react'

interface InputProps {
	type?: 'text' | 'password' | 'email' | 'number'
	placeholder?: string
	label?: string
	size?: 'sm' | 'md' | 'lg'
	cls?: string
	[key: string]: any
}

const Input: React.FC<InputProps> = ({ type = 'text', placeholder, label, size = 'md', cls, ...props }) => {
	const sizes = {
		sm: 200,
		md: 275,
		lg: 325
	}
	const w = sizes[size]
	console.log(props)
	const cl =
		`placeholder-shown:border-[rgba(153,153,153,0.6)] placeholder:text-[#999999] placeholder:font-light placeholder:opacity-60  w-[${w}] h-[50px] px-[20px] focus:outline-none focus:border-[1px] focus:border-[#000000] rounded-[5px] border-[1px] border-[#000000] transition-all ` +
		cls
	// const ForwardInput = React.forwardRef<HTMLInputElement>((prop, ref) => (
	// 	<input ref={ref} className={cl} type={type} placeholder={placeholder} {...prop} {...props} />
	// ))
	// ForwardInput.displayName = 'ForwardInput'
	return (
		<>
			{label && <label>{label}</label>}
			<input className={cl} type={type} placeholder={placeholder} {...props.props} />
		</>
	)
}

export default Input
