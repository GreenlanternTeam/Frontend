import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FieldError, FieldPath, RegisterOptions, UseFormRegisterReturn } from 'react-hook-form'
import { FormValue } from 'types/SignUpType'

type sizeType = 'sm' | 'md' | 'lg' | 'full'
interface Props {
	label?: string
	register: UseFormRegisterReturn
	error: FieldError | undefined
	isValid: boolean
	placeholder: string
	name: FieldPath<FormValue>
	sizetype?: sizeType
	[key: string]: any
}

const InputContainer: React.FC<Props> = ({ label, register, error, isValid, placeholder, sizetype = 'full', ...rest }) => {
	const [ok, setOk] = useState(false)
	useEffect(() => {
		setOk(isValid && !error)
	}, [isValid, error])
	return (
		<>
			{label && <label>{label}</label>}
			<TextInput placeholder={placeholder} error={error} isValid={isValid} sizetype={sizetype} {...register} {...rest} />
		</>
	)
}

export default InputContainer
const TextInput = styled.input<{ error: FieldError | undefined; isValid: boolean; sizetype: sizeType }>`
	width: ${(props) =>
		props.sizetype === 'full' ? '100%' : props.sizetype === 'lg' ? '325px' : props.sizetype === 'md' ? '275px' : '200px'};
	height: 50px;
	background: #ffffff;
	border: ${(props) => (props.error ? '1px solid #FF0000' : '1px solid rgba(153, 153, 153, 0.6)')};
	box-sizing: border-box;
	border-radius: 5px;
	margin-top: 100px;
	font-size: 14px;
	font-weight: 400;
	padding-left: 10px;
	outline: ${(props) => (!props.error && props.isValid ? '1px solid #000000' : 'none')};

	&:focus {
		outline: ${(props) => (props.error ? '1px solid #FF0000' : '1px solid #000000')};
	}
`
