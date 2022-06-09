import React, { useState } from 'react'
import styled from 'styled-components'
import {
	FieldError,
	UseFormGetValues,
	UseFormHandleSubmit,
	UseFormRegister,
	UseFormSetError,
	UseFormSetValue,
	UseFormWatch
} from 'react-hook-form'
import { FormValue, FormIsValid } from 'types/SignUpType'
import { SignUpType } from 'api/auth'
import InputContainer from './Input'
import GreenPopUp from 'components/GreenPopUp'
import { usePopup } from 'hooks/usePopup'
import SendEmailPopup from './SendEmailPopup'
import SubmitButton from '../Button/Button'
interface Props {
	register: UseFormRegister<FormValue>
	errors: {
		userId?: FieldError | undefined
		password?: FieldError | undefined
		email?: FieldError | undefined
		password_confirm?: FieldError | undefined
		nickname?: FieldError | undefined
	}
	watch: UseFormWatch<FormValue>
	onSubmit: (data: SignUpType) => void
	handleSubmit: UseFormHandleSubmit<FormValue>
	setIsValid: React.Dispatch<React.SetStateAction<FormIsValid>>
	isValid: FormIsValid
	onFormValid: (inputName: string, error: FieldError | undefined) => void
	setValue: UseFormSetValue<FormValue>
	onAllCheck: () => void

	setError: UseFormSetError<FormValue>
	getValues: UseFormGetValues<FormValue>
}

const RegisterForm = ({ register, errors, watch, onSubmit, handleSubmit, isValid, onFormValid, onAllCheck, getValues }: Props) => {
	// const [state, setState] = useState(null)
	// const emailCheck = async (value: any) => {
	// 	const res = (await customAxios.post('/api/check/email', value)) || '이미 존재하는 이메일 입니다.'
	// 	setState(res)
	// }

	const { setPopupShow, isSuccess } = usePopup()
	const allCheck = watch('allcheck', false)

	const [valid, setValid] = useState(false)

	return (
		<Wrrapper>
			<GreenPopUp>
				<SendEmailPopup email={getValues().email} />
			</GreenPopUp>
			<h2>회원가입</h2>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputContainer
					label="이메일"
					placeholder="이메일 입력"
					error={errors.email}
					isValid={isValid.email}
					register={register}
					name="email"
					options={{
						required: { value: true, message: '필수항목 입니다' },
						pattern: {
							value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
							message: '올바른 이메일 형식이 아닙니다.'
						},
						validate: (value) => {
							// debounce(ok, 5000)
							onFormValid('email', errors.email)
							if (!errors.email) {
								setValid(true)
							}
							return true
						},
						onBlur: () => {
							valid && setPopupShow(true)
						}
					}}
				/>
				{errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
				<InputContainer
					label="비밀번호"
					placeholder="10자 이상의 영문/숫자/특수문자를 조합"
					type="password"
					name="password"
					register={register}
					error={errors.password}
					isValid={isValid.password}
					options={{
						required: { value: true, message: '필수항목 입니다' },
						minLength: { value: 10, message: '10자 이상 입력해주세요' },
						pattern: {
							value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/,
							message: '올바른 비밀번호 형식이 아닙니다.'
						},
						validate: (value) => {
							onFormValid('password', errors.password)
							return true
						}
						// onBlur: () => onFormValid('password', errors.password)
					}}
				/>
				{errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
				<InputContainer
					label="비밀번호 확인"
					placeholder="비밀번호 재입력"
					type="password"
					name="password_confirm"
					register={register}
					error={errors.password_confirm}
					isValid={isValid.password_confirm}
					options={{
						required: { value: true, message: '필수항목 입니다.' },
						validate: (value) => {
							onFormValid('password_confirm', errors.password_confirm)
							return value === getValues().password
						}
						// onBlur: () => onFormValid('password_confirm', errors.password_confirm)
					}}
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
					register={register}
					placeholder="닉네임 입력"
					error={errors.nickname}
					isValid={isValid.nickname}
					options={{
						required: { value: true, message: '필수항목 입니다.' },
						validate: (value) => {
							onFormValid('nickname', errors.nickname)
							return true
						}
						// onBlur: () => onFormValid('nickname', errors.nickname)
					}}
				/>
				{errors.nickname && <ErrorMsg>{`${errors.nickname.message}.`}</ErrorMsg>}
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
				<SubmitButton text="회원가입" />
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
const Input = styled.input<{ error: FieldError | undefined; isValid: boolean }>`
	width: 275px;
	height: 50px;
	background: #ffffff;
	border: ${(props) => (props.error ? '1px solid #FF0000' : '1px solid rgba(153, 153, 153, 0.6)')};
	box-sizing: border-box;
	border-radius: 5px;
	margin-top: 5px;
	font-size: 14px;
	font-weight: 400;
	padding-left: 10px;
	outline: ${(props) => (!props.error && props.isValid ? '1px solid #000000' : 'none')};

	&:focus {
		outline: ${(props) => (props.error ? '1px solid #FF0000' : '1px solid #000000')};
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
