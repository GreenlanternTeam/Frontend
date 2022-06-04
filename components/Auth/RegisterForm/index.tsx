import React, { useState } from 'react'
import styled from 'styled-components'
import { FieldError, UseFormReturn } from 'react-hook-form'
import { FormValue, FormIsValid } from 'types/SignUpType'
import { SignUpType } from 'api/auth'
import InputContainer from 'components/atoms/Input'
import GreenPopUp from 'components/GreenPopUp'
import { usePopup } from 'hooks/usePopup'
import SendEmailPopup from './SendEmailPopup'
import { classNames } from 'utils/fn'
interface Props extends UseFormReturn<FormValue> {
	onSubmit: (data: SignUpType) => void
	setIsValid: React.Dispatch<React.SetStateAction<FormIsValid>>
	isValid: FormIsValid
	onFormValid: (inputName: string, error: FieldError | undefined) => void
	onAllCheck: () => void
}

const RegisterForm = ({ isValid, onFormValid, onAllCheck, ...formState }: Props) => {
	const {
		register,
		formState: { errors, isValidating },
		watch,
		onSubmit,
		handleSubmit,
		getValues
	} = formState
	const { setPopupShow, isSuccess } = usePopup()
	const allCheck = watch('allcheck', false)
	console.log(isSuccess)
	const [valid, setValid] = useState(false)
	return (
		<Wrrapper>
			<GreenPopUp>
				<SendEmailPopup email={getValues().email} />
			</GreenPopUp>
			<h2>회원가입</h2>
			<Form onSubmit={handleSubmit(onSubmit)}>
				{/* 이메일 유효성 검사 로직 재구현 필요 */}
				<div className="relative">
					<InputContainer
						label="이메일"
						placeholder="이메일 입력"
						error={errors.email}
						register={register('email', {
							required: { value: true, message: '필수항목 입니다' },
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
					placeholder="10자 이상의 영문/숫자/특수문자를 조합"
					type="password"
					name="password"
					register={register('password', {
						required: { value: true, message: '필수항목 입니다' },
						minLength: { value: 10, message: '10자 이상 입력해주세요' },
						pattern: {
							value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/,
							message: '올바른 비밀번호 형식이 아닙니다'
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
						required: { value: true, message: '필수항목 입니다' },
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
						<ErrorMsg>비밀번호가 다릅니다</ErrorMsg>
					))}
				<InputContainer
					label="닉네임"
					name="nickname"
					register={register('nickname', {
						required: { value: true, message: '필수항목 입니다' },
						validate: (value) => {
							onFormValid('nickname', errors.nickname)
							return true
						}
						// onBlur: () => onFormValid('nickname', errors.nickname)
					})}
					placeholder="닉네임 입력"
					error={errors.nickname}
				/>
				{errors.nickname && <ErrorMsg>{errors.nickname.message}</ErrorMsg>}
				<Line />
				<Agree>
					<h3>
						약관동의<p>*</p>
					</h3>
					<AllCheckLabel>
						<AgreeCheck
							type="checkbox"
							{...(register('allcheck'),
							{
								onChange: () => onAllCheck()
							})}
						/>
						<span>전체 동의</span>
					</AllCheckLabel>
					<AgreeCheckGroup>
						<AgreeCheckLabel>
							<AgreeCheck
								type="checkbox"
								{...register('agree_14plus', {
									required: { value: true, message: '필수항목 입니다' }
								})}
							/>
							[필수] 만 14세 이상
						</AgreeCheckLabel>
						<AgreeCheckLabel>
							<AgreeCheck
								type="checkbox"
								{...register('agree_terms', {
									required: { value: true, message: '필수항목 입니다' }
								})}
							/>
							<span>[필수] 이용약관</span>
						</AgreeCheckLabel>
						<AgreeCheckLabel>
							<AgreeCheck
								type="checkbox"
								{...register('agree_info', {
									required: { value: true, message: '필수항목 입니다' }
								})}
							/>
							<span>[필수] 개인정보 수집 및 이용동의</span>
						</AgreeCheckLabel>
						<AgreeCheckLabel>
							<AgreeCheck type="checkbox" checked={allCheck || watch('agree_recinfo')} {...register('agree_recinfo')} />
							[선택] 정보 수신 동의
						</AgreeCheckLabel>
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
	width: 275px;
	border-bottom: 1px solid rgba(153, 153, 153, 0.6);
	margin-bottom: 20px;
	margin-top: 40px;
`
const Agree = styled.div`
	display: flex;
	flex-direction: column;

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
	width: 24px;
	height: 23.04px;
	border-radius: 5px;
	margin-right: 10px;
	background-color: #f7f2dc;
`
const AgreeCheckLabel = styled.label`
	font-size: 16px;
	font-weight: 300;
	display: flex;
	align-items: center;
	margin-top: 20px;

	span {
		text-decoration: underline;
	}
`
const AllCheckLabel = styled.label`
	font-size: 16px;
	font-weight: 500;
	line-height: 100%;
	display: flex;
	align-items: center;
	margin-top: 20px;
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
