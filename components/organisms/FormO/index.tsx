import GButton from 'components/atoms/GButton'
import LoginTitle from 'components/atoms/LoginTitle'
import OAuthText from 'components/atoms/OAuthText'
import FindPrivate from 'components/molecules/FindPrivate'
import LoginInput from 'components/molecules/LoginInput'
import OAuthWrapper from 'components/molecules/OAuthWrapper'
import React from 'react'

const FormO = () => {
	return (
		<>
			<LoginTitle className="my-[53px]" text="로그인" />
			<form className="space-y-[30px]">
				<LoginInput />
				<GButton text="로그인" />
			</form>
			<FindPrivate />
			<OAuthText />
			<OAuthWrapper />
		</>
	)
}

export default FormO
