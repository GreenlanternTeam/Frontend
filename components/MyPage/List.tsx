import React from 'react'
import styled from 'styled-components'
import { FiBell } from 'react-icons/fi'

const List = () => {
	return (
		<Wrapper>
			<Container>
				<Line />
				<FiBell size={25} />
				<Text>알림받을 키워드가 없어요?</Text>
			</Container>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background-color: #eeeeee;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 10px;
	padding-bottom: 23px;
`
const Container = styled.div`
	background-color: #ffffff;
	width: 353px;
	height: 666px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;

	svg {
		margin-top: 50px;
	}
`
const Line = styled.div`
	width: 275px;
	border-bottom: 1px solid rgba(153, 153, 153, 0.6);
	margin-top: 45px;
	/* line-height: 0.1em; */
	/* margin: 20px 0 20px; */
	/* text-align: center; */
`
const Text = styled.span`
	font-weight: 600;
	font-size: 18px;
	color: #000000;
	margin-top: 15px;
`

export default List
