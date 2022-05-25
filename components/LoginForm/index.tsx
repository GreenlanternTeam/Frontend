import styled from 'styled-components'
import Kakao from 'public/icons/kakao.svg'
import Google from 'public/icons/google.svg'
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { LoginType } from 'types/LoginType'
import Link from 'next/link'
import Timer from 'components/Timer/Timer'
import { customAxios } from 'api'

export const REDIRECT_URI =
	process.env.NODE_ENV === 'production' ? process.env.NEXT_KAKAO_REDIRECT_URI : process.env.NEXT_KAKAO_REDIRECT_URI_DEV
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`
const LOGIN_GOOGLE = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_GOOGLE_ID}&response_type=code&redirect_uri=${REDIRECT_URI}/google&scope=${process.env.NEXT_GOOGLE_SCOPE}`
interface Props {
	register: UseFormRegister<LoginType>
	handleSubmit: UseFormHandleSubmit<LoginType>
	onSubmit: (data: LoginType) => void
}

const LoginForm = ({ register, handleSubmit, onSubmit }: Props) => {
	// const getSocial = async () => {
	// 	const res = await customAxios.get('/oauth/kakao/login/')
	// }
	return (
		<Wrrapper>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<h2>로그인</h2>
				<Input placeholder="이메일" {...register('email', { required: true })} />
				<Input placeholder="비밀번호 " type="password" {...register('password', { required: true })} />
				<Button type="submit">로그인</Button>
				<p>
					아이디 비밀번호 찾기 | <Link href="register">회원가입</Link>
				</p>
				<LineGroup>
					<Line />
					<span>간편 로그인 or 회원가입</span>
					<Timer time={180} />
					<Line />
				</LineGroup>
			</Form>
			<Oauth>
				<Link href={KAKAO_AUTH_URL} passHref>
					<a>
						{/* <div style={{ cursor: 'pointer' }} onClick={getSocial}> */}
						<Kakao />
					</a>
					{/* </div> */}
				</Link>
				<Link href={LOGIN_GOOGLE} passHref>
					<a>
						<Google />
					</a>
				</Link>
			</Oauth>
		</Wrrapper>
	)
}
export default LoginForm

const Wrrapper = styled.div`
	background-color: rgba(153, 153, 153, 0.15);
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	p {
		margin-top: 20px;
		font-weight: 500;
		font-size: 14px;
		line-height: 17px;
	}
`
const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	h2 {
		display: block;
		font-weight: 600;
		font-size: 20px;
		line-height: 24px;
		margin-top: 60px;
		margin-bottom: 50px;
	}
	p {
		margin-top: 20px;
		margin-bottom: 40px;
	}
`
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

const Button = styled.button`
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
const Line = styled.div`
	width: 61px;
	border-bottom: 1px solid rgba(153, 153, 153, 0.6);
	line-height: 0.1em;
	margin: 20px 0 20px;
	text-align: center;
`
const LineGroup = styled.div`
	display: flex;
	align-items: center;
	span {
		margin-left: 13px;
		margin-right: 13px;
		color: rgba(153, 153, 153, 0.6);
		font-style: medium;
		font-size: 14px;
	}
`

const Oauth = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	margin-top: 40px;
	svg {
		margin: 0px 20px 0px 20px;
	}
`
