import Input from 'components/atoms/Input'
import React from 'react'

const LoginInput = () => {
	return (
		<div className="space-y-[5px]">
			<Input placeholder="아이디" />
			<Input placeholder="비밀번호" type="password" />
		</div>
	)
}

export default LoginInput
