import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GoogleImg from 'public/icons/sns_google.png'

interface GoogleProps {
	href?: string
}

const Google: React.FC<GoogleProps> = ({ href = '/login' }) => {
	return (
		<Link href={href}>
			<a>
				<Image width="60px" height="60px" src={GoogleImg} alt="google" />
			</a>
		</Link>
	)
}

export default Google
