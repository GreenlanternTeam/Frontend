import type { NextPage } from 'next'
import styled from 'styled-components'
import { ReactComponent as Kakao } from 'public/icons/kakao.svg'
import { ReactComponent as Google } from 'public/icons/google.svg'

const LoginForm: NextPage = () => {
	return (
		<Wrrapper>
			<Form>
				<h2>로그인</h2>
				<Input />
				<Input type="password" />
				<Button>로그인</Button>
				<p>아이디 비밀번호 찾기 | 회원가입</p>
				<Line />
			</Form>
			<Sns>
				<Kakao />
				<Google />
			</Sns>
			<p>간편 로그인 or 회원가입</p>
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
		font-family: 'Pretendard';
		font-style: normal;
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
		font-family: 'Pretendard';
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		line-height: 24px;
		margin-top: 60px;
		margin-bottom: 50px;
	}

	p {
		margin-top: 20px;
		margin-bottom: 60px;
	}
`
const Input = styled.input`
	width: 275px;
	height: 50px;
	background: #ffffff;
	border: 1px solid #000000;
	box-sizing: border-box;
	border-radius: 5px;
	margin-top: 5px;
`

const Button = styled.button`
	width: 275px;
	height: 50px;
	background: #346053;
	border-radius: 5px;
	margin-top: 30px;
	font-family: 'Pretendard';
	font-style: normal;
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
	margin: 10px 0 20px;
	text-align: center;
`
const LineGroup = styled.div`
	display: flex;

	span {
		margin-left: 13px;
		margin-right: 13px;
		color: rgba(153, 153, 153, 0.6);
		font-style: medium;
		font-size: 14px;
	}
`

const Sns = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	margin-top: 40px;

	svg {
		margin: 0px 20px 0px 20px;
	}
`
