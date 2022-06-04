import Link from 'next/link'
import React from 'react'
import Kakao from 'public/icons/kakao.svg'
import Google from 'public/icons/google.svg'

interface ISocialBtn {
	rel: string
}

const SocialBtn: React.FC<ISocialBtn> = ({ rel }) => {
	return (
		<Link href="sdf">
			<a>{rel === 'kakao' ? <Kakao /> : <Google />}</a>
		</Link>
	)
}

export default SocialBtn
