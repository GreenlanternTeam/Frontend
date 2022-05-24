import type { NextPage } from 'next'
import styled from 'styled-components'

const Slide: NextPage = () => {
	return (
		<Wrapper>
			<Contents />
		</Wrapper>
	)
}
export default Slide

const Wrapper = styled.div`
	width: 80%;
	height: 150vh;
	margin-left: 20%;
	position: absolute;
	background-color: white;
`
const Contents = styled.div`
	width: 100%;
	height: 100%;
	background-color: black;
`
