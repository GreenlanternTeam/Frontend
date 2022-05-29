import React, { useCallback, useEffect, useState } from 'react'
import Input from 'components/atoms/Input'
import Timer from 'components/Timer/Timer'
import BButton from 'components/atoms/BButton'
import { usePopup } from 'hooks/usePopup'
import { useTimer } from 'hooks/useTimer'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { generate4Code } from 'utils/globalUtils'

interface SendEmailPopupProps {
	email: string | null
}

interface FormKey {
	key: number | string
}

const SendEmailPopup: React.FC<SendEmailPopupProps> = ({ email }) => {
	const { setPopupShow, setSuccess, valid, setValid } = usePopup<string>(generate4Code(Math.random() * 10000))
	const { isTimerDone } = useTimer()

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors }
	} = useForm<FormKey>()
	const sendEmail = useCallback(
		(validKey?: string) => {
			if (email) {
				const params = {
					to: email,
					from: 'GreenLantern',
					key: validKey ?? valid
				}
				emailjs.send(
					process.env.NEXT_PUBLIC_EMAIL_ID!,
					process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
					params,
					process.env.NEXT_PUBLIC_EMAIL_PRIVATE_ID
				)
			}
		},
		[email, valid]
	)

	const onValid = (data: FormKey) => {
		if (data.key === valid && !isTimerDone) {
			setSuccess(true)
			setError('key', { message: '인증완료' })
			setTimeout(() => setPopupShow(false), 1500)
		} else if (isTimerDone) {
			setError('key', { message: '시간초과' })
		} else {
			console.log(data)
			setError('key', { message: '인증번호 불일치' })
		}
	}

	// 메일이 2번감 랜더 2번이루어지는거 수정해야함
	// 재전송 되면 타이머 초기화
	const reSendEmail = () => {
		const data = generate4Code(Math.random() * 10000)
		sendEmail(data)
		setValid(data)
	}
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
						전송되지 않을경우 <u onClick={() => reSendEmail()}>재전송</u> 버튼을 눌러주세요.
					</h3>
					{errors.key && <div className="pt-4 text-red-400 font-extrabold text-md">{errors.key.message}</div>}
					<BButton text="확인" type="submit" />
				</div>
			</form>
		</>
	)
}

export default SendEmailPopup