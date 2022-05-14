import React from 'react'
import styled from 'styled-components'
import type { NextPage } from 'next'

const RegisterForm: NextPage = () => {
	const agreeData = [
		{ id: 1, data: '[필수] 만 14세 이상' },
		{ id: 2, data: '[필수] 이용약관' },
		{ id: 3, data: '[필수] 개인정보 수집 및 이용동의' },
		{ id: 4, data: '[선택] 정보 수신 동의' }
	]

	return (
		<Wrrapper>
			<h2>회원가입</h2>
			<Form>
				<label>
					아이디<p>*</p>
				</label>
				<Input placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" />
				<label>
					비밀번호<p>*</p>
				</label>
				<Input type="password" placeholder="10자 이상의 영문/숫자/특수문자를 조합" />
				<label>
					비밀번호 확인<p>*</p>
				</label>
				<Input type="password" placeholder="비밀번호 재입력" />
				<label>이메일</label>
				<Input placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" />
				<label>닉네임</label>
				<Input placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" />
				<Line />
			</Form>
			<Agree>
				<h3>
					약관동의<p>*</p>
				</h3>
				<label>
					<AgreeCheck type="checkbox" />
					전체 동의
				</label>

				{agreeData.map((el) => (
					<label key={el.id}>
						<AgreeCheck type="checkbox" />
						{el.data}
					</label>
				))}
			</Agree>
			<Button>회원가입</Button>
		</Wrrapper>
	)
}
export default RegisterForm

const Wrrapper = styled.div`
	background-color: rgba(153, 153, 153, 0.15);
	display: flex;
	align-items: center;
	flex-direction: column;
	padding-bottom: 60px;

	h2 {
		font-family: 'Pretendard';
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		line-height: 24px;
		margin-top: 60px;
		margin-bottom: 50px;
	}
`
const Form = styled.form`
	display: flex;
	flex-direction: column;

	label {
		display: flex;

		p {
			color: red;
		}
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
	margin-bottom: 50px;
	font-size: 14px;
	padding-left: 10px;
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
	width: 275px;
	border-bottom: 1px solid rgba(153, 153, 153, 0.6);
	margin-bottom: 20px;
`
const Agree = styled.form`
	display: flex;
	flex-direction: column;
	width: 70%;

	h3 {
		margin-bottom: 19px;
		font-family: Pretendard;
		font-style: Medium;
		font-size: 18px;
		line-height: 100%;
		display: flex;
		align-items: center;

		p {
			color: red;
		}
	}

	label {
		font-family: 'Pretendard';
		font-style: medium;
		font-size: 16px;
		line-height: 100%;
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}
`

const AgreeCheck = styled.input`
	width: 24px;
	height: 23.04px;
	border-radius: 5px;
	margin-right: 10px;
	background-color: #f7f2dc;
`
