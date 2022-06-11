import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

interface ButonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
}

const Button = ({ text, ...rest }: ButonProps) => {
	return <StyledButton {...rest}>{text}</StyledButton>
}

export default Button

const StyledButton = styled.button`
	width: 275px;
	height: 50px;
	background: #346053;
	border-radius: 5px;
	margin-top: 30px;
	font-weight: 500;
	font-size: 18px;
	line-height: 22px;
	color: #ffffff;
	margin-bottom: 1px;
`
