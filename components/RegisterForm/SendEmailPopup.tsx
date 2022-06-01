import React, { useCallback, useEffect, useState } from 'react'
import Input from 'components/atoms/Input'
import Timer from 'components/Timer/Timer'
import BButton from 'components/atoms/BButton'
import { usePopup } from 'hooks/usePopup'
import { useTimer } from 'hooks/useTimer'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { generate4Code } from 'utils/globalUtils'
import axios from 'axios'

interface SendEmailPopupProps {
	email: string | null
}

interface FormKey {
	key: number | string
}

const SendEmailPopup: React.FC<SendEmailPopupProps> = ({ email }) => {
	const { setPopupShow, setSuccess, valid, setValid } = usePopup<string>(generate4Code(Math.random() * 10000))
	const { isTimerDone, resetTimer } = useTimer()

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors }
	} = useForm<FormKey>()
	const sendEmail = useCallback(
		async (validKey?: string) => {
			if (email) {
				const params = {
					to: email,
					from: 'GreenLantern',
					key: validKey ?? valid
				}
				const res = await axios.post('/api/email', params)
				console.log(res)
			}
		},
		[email, valid]
	)

	const onValid = (data: FormKey) => {
		if (data.key === valid && !isTimerDone) {
			setSuccess(true)
			setError('key', { message: '인증완료' })
			setTimeout(() => setPopupShow(false), 1000)
		} else if (isTimerDone) {
			setError('key', { message: '시간초과' })
		} else {
			console.log(data)
			setError('key', { message: '인증번호 불일치' })
		}
	}

	const handleClick = () => {
		setValid(generate4Code(Math.random() * 10000))
		resetTimer()
	}

	// 재전송 되면 타이머 초기화
	useEffect(() => {
		sendEmail()
	}, [sendEmail])
	return (
		<>
			<div className="font-medium text-[16px] opacity-80">
				<h1>이메일에 전송된</h1>
				<h1>인증번호를 입력해주세요.</h1>
			</div>

			<form onSubmit={handleSubmit(onValid)}>
				<div className="relative flex items-center">
					<Input
						type="number"
						maxLength={4}
						placeholder="인증번호"
						sizeType="sm"
						addClass="pr-[60px]"
						register={register('key', { required: '필수임' })}
					/>
					<Timer time={180} cls="right-[20px] absolute" />
				</div>
				<div className="font-normal text-[11px] text-center">
					<h3>3분 이내로 인증번호(4자리)를 입력하세요.</h3>
					<h3>
						전송되지 않을경우 <u onClick={() => handleClick()}>재전송</u> 버튼을 눌러주세요.
					</h3>
					{errors.key && <div className="pt-4 text-red-400 font-extrabold text-md">{errors.key.message}</div>}
					<BButton text="확인" type="submit" />
				</div>
			</form>
		</>
	)
}

export default SendEmailPopup
