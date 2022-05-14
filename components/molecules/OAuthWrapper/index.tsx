import Google from 'components/atoms/Google'
import Kakao from 'components/atoms/Kakao'
import React from 'react'

const OAuthWrapper = () => {
	return (
		<div className="w-full flex justify-center space-x-[40px] mt-[40px]">
			<Kakao />
			<Google />
		</div>
	)
}

export default OAuthWrapper
