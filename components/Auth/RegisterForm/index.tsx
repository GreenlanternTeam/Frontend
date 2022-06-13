import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FieldError, UseFormReturn } from 'react-hook-form'
import { FormValue, FormIsValid, TestStateType } from 'types/SignUpType'
import { SignUpType } from 'api/auth'
import InputContainer from 'components/atoms/Input'
import GreenPopUp from 'components/GreenPopUp'
import { usePopup } from 'hooks/usePopup'
import SendEmailPopup from './SendEmailPopup'
import { classNames } from 'utils/fn'
import Vector from 'public/icons/Vector.svg'
interface Props extends UseFormReturn<FormValue> {
	onSubmit: (data: SignUpType) => void
	setIsValid: React.Dispatch<React.SetStateAction<FormIsValid>>
	isValid: FormIsValid
	onFormValid: (inputName: string, error: FieldError | undefined) => void
	onAllCheck: () => void
	testState: TestStateType
}

const RegisterForm = ({ isValid, onFormValid, onAllCheck, testState, ...formState }: Props) => {
	const {
		register,
		formState: { errors, isValidating },
		onSubmit,
		handleSubmit,
		getValues
	} = formState
	const { setPopupShow, isSuccess } = usePopup()
	const [valid, setValid] = useState(false)
	const checkBoxState = getValues()

	console.log(testState.allcheck)

	return (
		<Wrrapper>
			<GreenPopUp>
				<SendEmailPopup email={getValues().email} />
			</GreenPopUp>
			<h2>회원가입</h2>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<div className="relative">
					<InputContainer
						label="이메일"
						placeholder="이메일 주소"
						error={errors.email}
						register={register('email', {
							required: { value: true, message: '필수항목 입니다.' },
							pattern: {
								value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
								message: '올바른 이메일 형식이 아닙니다'
							},
							validate: (value) => {
								// debounce(ok, 5000)
								onFormValid('email', errors.email)
								if (!errors.email) {
									setValid(true)
								}
								return true
							}
						})}
						name="email"
						effectNode={
							!isSuccess && (
								<div
									onClick={() => setPopupShow(true)}
									className={classNames(
										'flex h-4 w-4 absolute transition-all cursor-pointer top-[50%] left-[calc(100%_-_1rem)] -translate-y-1/2 -translate-x-1/2',
										valid ? 'scale-100' : 'scale-0'
									)}
								>
									<span className="relative inline-flex rounded-full h-full w-full">
										<svg
											className="absolute w-full h-full  stroke-sky-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
											></path>
										</svg>
										<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
									</span>
								</div>
							)
						}
					/>
				</div>
				{errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
				<InputContainer
					label="비밀번호"
					placeholder="영문, 숫자 포함 8자 이상"
					type="password"
					name="password"
					register={register('password', {
						required: { value: true, message: '필수항목 입니다.' },
						minLength: { value: 10, message: '8자 이상 입력해주세요.' },
						pattern: {
							value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
							message: '올바른 비밀번호 형식이 아닙니다.'
						},
						validate: (value) => {
							onFormValid('password', errors.password)
							return true
						}
						// onBlur: () => onFormValid('password', errors.password)
					})}
					error={errors.password}
				/>
				{errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
				<InputContainer
					label="비밀번호 확인"
					placeholder="비밀번호 재입력"
					type="password"
					name="password_confirm"
					register={register('password_confirm', {
						required: { value: true, message: '필수항목 입니다.' },
						validate: (value) => {
							onFormValid('password_confirm', errors.password_confirm)
							return value === getValues().password
						}
						// onBlur: () => onFormValid('password_confirm', errors.password_confirm)
					})}
					error={errors.password_confirm}
				/>
				{errors.password_confirm &&
					(errors.password_confirm.type === 'required' ? (
						<ErrorMsg>{errors.password_confirm.message}</ErrorMsg>
					) : (
						<ErrorMsg>비밀번호가 다릅니다.</ErrorMsg>
					))}
				<InputContainer
					label="닉네임"
					name="nickname"
					register={register('nickname', {
						required: { value: true, message: '필수항목 입니다.' },
						validate: (value) => {
							onFormValid('nickname', errors.nickname)
							return true
						}
						// onBlur: () => onFormValid('nickname', errors.nickname)
					})}
					placeholder="한글 2~8자,영문 4~16자"
					error={errors.nickname}
				/>
				{errors.nickname && <ErrorMsg>{`${errors.nickname.message}.`}</ErrorMsg>}
				<Line />
				<Agree>
					<h3>
						약관동의<p>*</p>
					</h3>
					<AgreeCheck
						type="checkbox"
						id="checkbox"
						{...(register('allcheck'),
						{
							onChange: () => onAllCheck()
						})}
					/>
					<AllCheckGroup>
						{testState.allcheck ? (
							<AgreeCheckedLabel onClick={() => onAllCheck()}>
								<Vector />
							</AgreeCheckedLabel>
						) : (
							<AllCheckLabel onClick={() => onAllCheck()} />
						)}
						<span>전체 동의</span>
					</AllCheckGroup>

					<AgreeCheckGroup>
						<AgreeCheck
							type="checkbox"
							{...register('agree_14plus', {
								required: { value: true, message: '필수항목 입니다.' }
							})}
						/>
						<CheckGroup>
							{testState.agree_14plus ? (
								<AgreeCheckedLabel onClick={() => onAllCheck()}>
									<Vector />
								</AgreeCheckedLabel>
							) : (
								<AgreeCheckLabel onClick={() => onAllCheck()} />
							)}
							<span>[필수] 만 14세 이상</span>
						</CheckGroup>
						<AgreeCheck
							type="checkbox"
							{...register('agree_terms', {
								required: { value: true, message: '필수항목 입니다.' }
							})}
						/>
						<CheckGroup>
							{testState.agree_terms ? (
								<AgreeCheckedLabel onClick={() => onAllCheck()}>
									<Vector />
								</AgreeCheckedLabel>
							) : (
								<AgreeCheckLabel onClick={() => onAllCheck()} />
							)}
							<span>[필수] 이용약관</span>
						</CheckGroup>
						<AgreeCheck
							type="checkbox"
							{...register('agree_info', {
								required: { value: true, message: '필수항목 입니다.' }
							})}
						/>
						<CheckGroup>
							{testState.agree_info ? (
								<AgreeCheckedLabel onClick={() => onAllCheck()}>
									<Vector />
								</AgreeCheckedLabel>
							) : (
								<AgreeCheckLabel onClick={() => onAllCheck()} />
							)}
							<span>[필수] 개인정보 수집 및 이용동의</span>
						</CheckGroup>
						<AgreeCheck type="checkbox" {...register('agree_recinfo')} />
						<CheckGroup>
							{testState.agree_recinfo ? (
								<AgreeCheckedLabel onClick={() => onAllCheck()}>
									<Vector />
								</AgreeCheckedLabel>
							) : (
								<AgreeCheckLabel onClick={() => onAllCheck()} />
							)}
							<span>[선택] 정보 수신 동의</span>
						</CheckGroup>
					</AgreeCheckGroup>
				</Agree>
				<Button type="submit">회원가입</Button>
			</Form>
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
		font-weight: 600;
		font-size: 20px;
		line-height: 24px;
		margin-top: 60px;
		margin-bottom: 10px;
	}
`
const Form = styled.form`
	display: flex;
	flex-direction: column;

	label {
		display: flex;
		font-weight: 500;
		font-size: 18px;
		margin-top: 20px;

		p {
			color: red;
		}
	}
`

const Button = styled.button`
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
	margin-bottom: 20px;
	margin-top: 40px;
`
const Agree = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 35px;

	label {
		font-size: 16px;
		font-weight: 500;
		display: flex;
		align-items: center;
		margin-top: 20px;
	}

	h3 {
		font-size: 18px;
		line-height: 100%;
		display: flex;
		align-items: center;

		p {
			color: red;
		}

		span {
			font-size: 16px;
			font-weight: 500;
			line-height: 100%;
		}
	}
`

const AgreeCheck = styled.input`
	display: none;
`
const AgreeCheckLabel = styled.label`
	width: 24px;
	height: 23.04px;
	border-radius: 5px;
	margin-right: 10px;
	background-color: #ffffff;
	border: 1px solid #999999;
`
const AllCheckLabel = styled.label`
	width: 24px;
	height: 23.04px;
	border-radius: 5px;
	margin-right: 10px;
	background-color: #ffffff;
	border: 1px solid #999999;
`
const AgreeCheckedLabel = styled.label`
	width: 24px;
	height: 23.04px;
	border-radius: 5px;
	margin-right: 10px;
	background-color: #f7f2dc;
	border: 1px solid #000000;
	display: flex;
	justify-content: center;

	svg {
		width: 12.23px;
		height: 9.34px;
	}
`

const ErrorMsg = styled.span`
	font-weight: 400;
	font-size: 16px;
	color: #ff0707;
	margin-top: 10px;
`

const AgreeCheckGroup = styled.div`
	margin-top: 10px;
	label {
		font-size: 16px;
		font-weight: 300;
		line-height: 100%;
	}
`
const CheckGroup = styled.div`
	display: flex;
	align-items: center;

	span {
		margin-top: 21px;
		font-weight: 300;
		font-size: 16px;
	}
`

const AllCheckGroup = styled.div`
	display: flex;
	align-items: center;

	span {
		margin-top: 21px;
		font-weight: 500;
		font-size: 16px;
	}
`
