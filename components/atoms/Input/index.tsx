import React, { InputHTMLAttributes, ReactNode } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import { classNames } from 'utils/fn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	type?: 'text' | 'password' | 'email' | 'number'
	placeholder?: string
	label?: string
	sizeType?: 'sm' | 'md' | 'lg' | 'full'
	register?: UseFormRegisterReturn
	effectNode?: ReactNode
	error?: FieldError | undefined
	addClass?: string
}

const Input: React.FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>(
	({ type = 'text', placeholder, label, sizeType = 'full', register, error, effectNode, addClass, ...inputState }, ref) => {
		const cl = sizeType === 'full' ? 'w-full' : sizeType === 'lg' ? 'w-[325px]' : sizeType === 'md' ? 'w-[275px]' : 'w-[200px]'
		const border = error
			? 'focus:border-[##ff0000] border-[1px] border-[#ff0000] '
			: 'focus:border-[#000000] border-[1px] border-[#000000] placeholder-shown:border-[rgba(153,153,153,0.6)] '
		return (
			<>
				{label && <label>{label}</label>}
				<div className={cl + ' h-fit relative'}>
					<input
						className={classNames(
							border,
							'placeholder:text-[#999999] placeholder:font-light placeholder:opacity-60  h-[50px] px-[20px] focus:outline-none focus:border-[1px]  rounded-[5px] transition-all w-full',
							addClass!
						)}
						type={type}
						placeholder={placeholder}
						{...register}
						{...inputState}
					/>
					{effectNode}
				</div>
			</>
		)
	}
)
Input.displayName = 'InputComponent'
export default Input
