import LinkedText from 'components/atoms/LinkedText'
import React from 'react'

const FindPrivate = () => {
	return (
		<div className="opacity-80 min-w-[275px] text-[14px] leading-[17px] text-center mt-[15px]">
			<LinkedText text="아이디 · 비밀번호 찾기" href="/login" />
			<span className="mx-[20px]">|</span>
			<LinkedText text="회원가입" href="/login" />
		</div>
	)
}

export default FindPrivate
