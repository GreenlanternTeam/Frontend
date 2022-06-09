import React from 'react'
import styled from 'styled-components'

interface ButonProps {
	text: string
}

const Button = ({ text }: ButonProps) => {
	return (
		<>
			<StyledButton type="submit">{text}</StyledButton>
		</>
	)
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
