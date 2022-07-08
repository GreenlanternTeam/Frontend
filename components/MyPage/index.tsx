import React from 'react'
import styled from 'styled-components'
import CopyRight from '../../utils/svg/MyPage/© greenlantern All Rights Reserved.svg'
import { BsCamera } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlinePlus } from 'react-icons/ai'
import { BsBookmarkDash } from 'react-icons/bs'
import { getRefreshToken } from 'utils/getToken'

interface Props {
	user: {
		email: string
		nickname: string
	} | null
	onLogOut: (token: string) => void
}

const MyPage = ({ user, onLogOut }: Props) => {
	const refresh = getRefreshToken()!
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
					<UserOption>
						<Pharase>
							<NickName>
								<span>{user?.nickname}</span>님,
							</NickName>
							환영합니다!
						</Pharase>
						<LogOut onClick={() => onLogOut(refresh)}>로그아웃</LogOut>
					</UserOption>
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
			<UserOptions>
				<OptionContainer>
					<span>정보수정</span>
					<span>앱 설정</span>
					<p>문의하기</p>
				</OptionContainer>
			</UserOptions>
			<Rule>
				<span>이용약관</span>
				<span>개인정보 이용방침</span>
			</Rule>
			<CopyRight />
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
	padding-bottom: 26px;
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
const UserOption = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	margin-top: 30px;
`
const LogOut = styled.span`
	padding-left: 97px;
	font-weight: 500;
	font-size: 14px;
	color: #999999;
	cursor: pointer;
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
	right: 13.5em;
	top: 4.6em;
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
	display: flex;
	justify-content: center;
	align-items: center;
`

const OptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 20px;
	font-weight: 500;

	span {
		margin-bottom: 10px;
	}

	p {
		color: #ff0000;
	}
`
const Rule = styled.div`
	width: 353px;
	height: 127px;
	background: #ffffff;
	border-radius: 10px;
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	font-size: 12px;
	font-weight: 500;
	padding-top: 40px;
	padding-left: 40px;
	margin-bottom: 20px;

	span {
		margin-bottom: 20px;
	}
`
