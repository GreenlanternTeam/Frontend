import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import KakaoImg from 'public/icons/sns_kakao.png'

interface KakaoProps {
	href?: string
}

const Kakao: React.FC<KakaoProps> = ({ href = '/login' }) => {
	return (
		<Link href={href}>
			<a>
				<Image width="60px" height="60px" src={KakaoImg} alt="kakao" />
			</a>
		</Link>
	)
}

export default Kakao
