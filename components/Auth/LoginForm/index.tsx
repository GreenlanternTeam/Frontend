import styled from 'styled-components'
import Kakao from 'public/icons/kakao.svg'
import Google from 'public/icons/google.svg'
import { FieldError, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { LoginType } from 'types/LoginType'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useEffect } from 'react'
import SubmitButton from '../Button/Button'

interface Props {
	register: UseFormRegister<LoginType>
	handleSubmit: UseFormHandleSubmit<LoginType>
	onSubmit: (data: LoginType) => void
	onFormValid: (inputName: string, error: FieldError | undefined) => void
	loginError: LoginType
	setLoginError: Dispatch<SetStateAction<LoginType>>
}

const LoginForm = ({ register, handleSubmit, onSubmit, onFormValid, loginError, setLoginError }: Props) => {
	return (
		<Wrrapper>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<h2>로그인</h2>
				<Input
					error={loginError.email}
					placeholder="이메일"
					{...register('email', {
						required: true,
						onChange: () => {
							if (loginError.email)
								setLoginError({
									...loginError,
									email: ''
								})
						}
					})}
				/>
				<Input
					placeholder="비밀번호 "
					error={loginError.password}
					type="password"
					{...register('password', {
						required: true,
						onChange: () => {
							if (loginError.password)
								setLoginError({
									...loginError,
									password: ''
								})
						}
					})}
				/>
				<SubmitButton text="로그인" />
				<p>
					비밀번호 찾기 | <Link href="register">회원가입</Link>
				</p>
				<LineGroup>
					<Line />
					<span>간편 로그인 or 회원가입</span>
					<Line />
				</LineGroup>
			</Form>
			<Oauth>
				<Link href={process.env.NEXT_PUBLIC_KAKAO_AUTH_URL!}>
					<a>
						<Kakao />
					</a>
				</Link>
				<Link href={process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL!}>
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
const Input = styled.input<{ error: string | undefined }>`
	width: 275px;
	height: 50px;
	background: #ffffff;
	border: ${(props) => (props.error ? '1px solid #FF0000' : '1px solid rgba(153, 153, 153, 0.6)')};
	color: ${(props) => (props.error ? '#FF0000' : '')};
	box-sizing: border-box;
	border-radius: 5px;
	margin-top: 5px;
	padding-left: 20px;
	font-weight: 400;
	font-size: 18px;
	&:focus {
		outline: ${(props) => (props.error ? '1px solid #FF0000' : '1px solid #000000')};
	}
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
