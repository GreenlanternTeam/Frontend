import type { NextPage } from 'next'
import { useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

interface LoginState {
	id: string
	password: string
}

const LoginForm: NextPage = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<LoginState>()
	console.log(errors)
	const onValid = (data: LoginState) => {
		console.log(data)
		reset()
	}
	return (
		<Wrapper>
			<h1>로그인</h1>
			<InputForm onSubmit={handleSubmit(onValid)}>
				<input
					className={errors.id ? 'bg-red-500' : ''}
					{...register('id', {
						required: '필수입력사항입니다.'
					})}
					placeholder="아이디(이메일)"
				/>
				<input
					className={errors.password ? 'bg-red-500' : ''}
					{...register('password', {
						required: '필수 입력사항 입니다.'
					})}
					placeholder="비밀번호"
					type="password"
				/>
				<SubmitButton>로그인 하기</SubmitButton>
			</InputForm>
		</Wrapper>
	)
}
export default LoginForm

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100vh;
`
const InputForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;

	input {
		padding: 10px;
		width: 26em;
		margin-top: 20px;
	}
`
const SubmitButton = styled.button`
	background-color: black;
	color: white;
	width: 28em;
	padding: 10px;
	margin-top: 20px;
`

// 아이템 10
//  전체길이 / 아이템수 = 바의 길이 (%)
//  transform(현재 아이템의 순서)
