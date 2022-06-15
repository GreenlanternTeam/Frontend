import styled from 'styled-components'
import Kakao from 'public/icons/kakao.svg'
import Google from 'public/icons/google.svg'
import { useForm } from 'react-hook-form'
import { LoginType } from 'types/LoginType'
import Link from 'next/link'
import { useEffect } from 'react'
import InputAtom from 'components/atoms/Input'
import useLogin from 'hooks/useLogin'
const LoginForm = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors }
	} = useForm<LoginType>()

	const { mutate, loginError, setLoginError } = useLogin()

	const onSubmit = (loginFormData: LoginType) => {
		mutate(loginFormData)
	}

	useEffect(() => {
		if (loginError.email) {
			setError('email', { type: 'validate', message: '이메일이 다릅니다.' })
		}
		if (loginError.password) {
			setError('password', { type: 'validate', message: '비밀번호가 다릅니다.' })
		}
	}, [loginError, setError])

	return (
		<Wrrapper className="px-[15%] w-full">
			<Form onSubmit={handleSubmit(onSubmit)}>
				<h2>로그인</h2>
				<div className="w-full space-y-4">
					<InputAtom
						error={errors.email}
						placeholder="이메일"
						{...register('email', {
							required: { value: true, message: '필수항목 입니다.' },
							pattern: {
								value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
								message: '올바른 이메일 형식이 아닙니다.'
							},
							validate: (value) => {
								console.log(value)
								return true
							}
						})}
					/>
					{errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
					<InputAtom
						placeholder="비밀번호 "
						error={errors.password}
						type="password"
						{...register('password', {
							required: '필수항목 입니다.'
						})}
					/>
					{errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
				</div>
				<Button type="submit">로그인</Button>
				<p>
					비밀번호 찾기<span className="px-[20px]">|</span>
					<Link href="register">회원가입</Link>
				</p>
				<LineGroup className="relative">
					<Line />
					<LoginSpan>간편 로그인 or 회원가입</LoginSpan>
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
	width: 100%;

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

const LoginSpan = styled.span`
	width: 100%;
	display: block;
	word-wrap: keep-all;
	white-space: nowrap;
	text-align: center;
`

const Button = styled.button`
	/* width: 275px; */
	width: 100%;
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
	width: 100%;
	border-bottom: 1px solid rgba(153, 153, 153, 0.6);
	z-index: -1;
	/* line-height: 0.1em; */
	/* margin: 20px 0 20px; */
	/* text-align: center; */
`
const LineGroup = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
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
const ErrorMsg = styled.span`
	font-weight: 400;
	font-size: 16px;
	color: #ff0707;
	margin-top: 10px;
`
