import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FieldError, FieldPath, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { FormValue } from 'types/SignUpType'
import { getValidate } from 'utils/fn'

interface Props {
	label?: string
	register: UseFormRegister<FormValue>
	error: FieldError | undefined
	isValid: boolean
	placeholder: string
	name: FieldPath<FormValue>
	options?: RegisterOptions
	validateTarget?: any
}

const InputContainer: React.FC<Props> = ({ label, register, error, isValid, placeholder, validateTarget, name, options, ...rest }) => {
	const [ok, setOk] = useState(false)
	useEffect(() => {
		setOk(isValid && !error)
	}, [isValid, error])
	return validateTarget ? (
		<>
			{label && <label>{label}</label>}
			<TextInput
				placeholder={placeholder}
				error={error}
				isValid={isValid}
				{...register(name, {
					...options,
					validate: (value) => {
						if (getValidate(value, validateTarget)) {
							return true
						}
						return false
					}
				})}
				{...rest}
			/>
		</>
	) : (
		<>
			{label && <label>{label}</label>}
			<TextInput
				placeholder={placeholder}
				error={error}
				isValid={isValid}
				{...register(name, {
					...options
					// validate: (_) => {
					// 	return true
					// }
				})}
				{...rest}
			/>
		</>
	)
}

export default InputContainer
const TextInput = styled.input<{ error: FieldError | undefined; isValid: boolean }>`
	width: 275px;
	height: 50px;
	background: #ffffff;
	border: ${(props) => (props.error ? '1px solid #FF0000' : '1px solid rgba(153, 153, 153, 0.6)')};
	box-sizing: border-box;
	border-radius: 5px;
	margin-top: 5px;
	font-size: 14px;
	font-weight: 400;
	padding-left: 10px;
	outline: ${(props) => (!props.error && props.isValid ? '1px solid #000000' : 'none')};

	&:focus {
		outline: ${(props) => (props.error ? '1px solid #FF0000' : '1px solid #000000')};
	}
`
