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
	const { isTimerDone, resetTimer } = useTimer()

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
					html: `
					<style>
					@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
					* {
						font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
					}
				</style>
					<div style="width:375px;">
						<div class="logoContainer" style="width: 100%; height: 160px; background-color: #F7F2DC;">
						 <img style="height:75px; padding:42px 0; display:block; margin:auto;" src="http://drive.google.com/uc?export=view&id=1YhzIfisaqUxyPbhmctbBUqwa3NkjIrfi" />
						</div>
						<div class="contentContainer" style="padding: 64px 49px; font-weight: 500; font-size: 18px;">
							<span>안녕하세요. 그린랜턴입니다.<br /> 회원가입을 위한 인증번호입니다.<br /><br />아래 인증번호를 확인하여<br />이메일 주소 인증을 완료해주세요.</span>
							<h1 style="width: 100%; padding: 56px 0;">${validKey ?? valid}</h1>
							<a style="padding:20px 50px; background-color: #346053; border-radius: 5px; border: none; height: 50px; font-weight: 600; font-size: 18px; color: white; text-decoration: none;" href="https://greenlantern.shop">greenlantern 바로가기</a>
						</div>
					</div>`
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
