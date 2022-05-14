import React from 'react'
import Link from 'next/link'

interface LinkedTextProps {
	href: string
	text: string
}

const LinkedText: React.FC<LinkedTextProps> = ({ href, text }) => {
	return (
		<Link href={href}>
			<a>{text}</a>
		</Link>
	)
}

export default LinkedText
