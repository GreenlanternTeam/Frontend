import React from 'react'
import styled from 'styled-components'

const TestInput = () => {
	return (
		<>
			<Input />
		</>
	)
}

export default TestInput

const Input = styled.input`
	width: 275px;
	height: 50px;
	background: #ffffff;
	border: 1px solid rgba(153, 153, 153, 0.6);
	box-sizing: border-box;
	border-radius: 5px;
	margin-top: 5px;
	padding-left: 20px;
	font-weight: 400;
	font-size: 18px;
	&:focus {
		outline: 1px solid #000000;
	}
`
