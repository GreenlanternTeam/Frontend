import React from 'react'
import styled from 'styled-components'
import Vectors from '../../utils/svg/MyPage/Vector (1).svg'
import Camera from '../../utils/svg/MyPage/Ellipse 5.svg'
import { BsCamera } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlinePlus } from 'react-icons/ai'
import { BsBookmarkDash } from 'react-icons/bs'

const MyPage = () => {
	return (
		<Wrapper>
			<Profile>
				<UserInfo>
					<Elipse>
						<Vector />
						<Radius />
					</Elipse>
					<CameraContainer>
						<BsCamera />
					</CameraContainer>
					<Pharase>
						<NickName>
							<span>랜턴이</span>님,
						</NickName>
						환영합니다!
					</Pharase>
				</UserInfo>
				<Option>
					<IconContainer>
						<AiOutlineHeart size={35} />
						<OptionName>좋아요</OptionName>
					</IconContainer>
					<IconContainer>
						<AiOutlinePlus size={35} />
						<OptionName>팔로우</OptionName>
					</IconContainer>
					<IconContainer>
						<BsBookmarkDash size={35} />
						<OptionName>스크랩북</OptionName>
					</IconContainer>
				</Option>
			</Profile>
			<UserOptions />
		</Wrapper>
	)
}

export default MyPage

const Wrapper = styled.div`
	background: #eeeeee;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const Profile = styled.div`
	background: #ffffff;
	width: 353px;
	height: 301px;
	margin-top: 30px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
`
const UserInfo = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	margin-top: 50px;
`

const Elipse = styled.div`
	width: 90.33px;
	height: 90.33px;
	background-color: rgba(102, 102, 102, 0.6);
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	margin-right: 30px;
`

const Vector = styled.div`
	width: 2.5rem;
	height: 5rem;
	background-color: #bdbdbd;
	border-radius: 50%;
	margin-top: 20px;
	margin-bottom: 10px;
`

const Radius = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background-color: #bdbdbd;
`
const Pharase = styled.span`
	font-weight: 600;
	font-size: 24px;
	margin-left: 10px;
`

const NickName = styled.span`
	display: block;
	margin-left: 10px;

	span {
		color: #00695c;
	}
`
const CameraContainer = styled.div`
	width: 27px;
	height: 27px;
	border-radius: 50%;
	background: #616161;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 12.9em;
	top: 4em;
	svg {
		color: white;
	}
`

const Option = styled.div`
	width: 100%;
	margin-top: 50px;
	display: flex;
	justify-content: space-around;
	margin-left: 20px;
	margin-bottom: 30px;
`
const IconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
const OptionName = styled.span`
	font-weight: 600;
	font-size: 18px;
	margin-top: 20px;
`

const UserOptions = styled.div`
	width: 353px;
	height: 176px;
	background: #ffffff;
	border-radius: 10px;
	margin-top: 10px;
`

const UserOption = styled.span`
	display: flex;
	justify-content: center;
`
