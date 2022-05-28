import React, { useCallback, useEffect, useState } from 'react'
import Input from 'components/atoms/Input'
import Timer from 'components/Timer/Timer'
import BButton from 'components/atoms/BButton'
import { usePopup } from 'hooks/usePopup'
import { useTimer } from 'hooks/useTimer'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'

interface SendEmailPopupProps {
	email: string | null
}

interface FormKey {
	key: number
}

const SendEmailPopup: React.FC<SendEmailPopupProps> = ({ email }) => {
	const { setPopupShow, isSuccess, setSuccess } = usePopup()

	const { isTimerDone } = useTimer()
	const mailKey = 1234
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormKey>()
	const sendEmail = useCallback(() => {
		if (email) {
			const params = {
				to: email,
				from: 'GreenLantern',
				key: mailKey
			}
			emailjs.send(process.env.NEXT_PUBLIC_EMAIL_ID!, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!, params, 'GdJCChcFnEKmT7Q94')
		}
	}, [email])

	const onValid = (data: FormKey) => {
		console.log(isTimerDone)
		if (+data.key === mailKey && !isTimerDone) {
			setPopupShow(false)
		} else {
			console.log(data)
			console.log('Not Currect')
		}
	}
	console.log(isTimerDone)
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
						size="sm"
						cls="pr-[60px]"
						props={register('key', { required: '필수임' })}
					/>
					<Timer time={180} cls="right-[20px] absolute" />
				</div>
				<div className="font-normal text-[11px] text-center">
					<h3>3분 이내로 인증번호(4자리)를 입력하세요.</h3>
					<h3>
						전송되지 않을경우 <u>재전송</u> 버튼을 눌러주세요.
					</h3>
					<BButton text="확인" type="submit" />
				</div>
			</form>
		</>
	)
}

export default SendEmailPopup
