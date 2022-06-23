import React from 'react'
import styled from 'styled-components'

const MyPage = () => {
	return (
		<Wrapper>
			<Profile>
				<Elipse>
					<Vector />
					<Radius />
				</Elipse>
			</Profile>
		</Wrapper>
	)
}

export default MyPage

const Wrapper = styled.div`
	background: #eeeeee;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
`
const Profile = styled.div`
	background: #ffffff;
	width: 353px;
	height: 291px;
	margin-top: 30px;
	border-radius: 10px;
`

const Elipse = styled.div`
	width: 80.33px;
	height: 80.33px;
	background-color: rgba(102, 102, 102, 0.6);
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`
const Vector = styled.div`
	width: 37px;
	height: 80px;
	background-color: #bdbdbd;
	border-radius: 50%;
	margin-top: 20px;
	margin-bottom: 10px;
`
const Radius = styled.div`
	width: 90px;
	height: 60px;
	border-top-left-radius: 80%;
	border-top-right-radius: 80%;
	background-color: #bdbdbd;
`
