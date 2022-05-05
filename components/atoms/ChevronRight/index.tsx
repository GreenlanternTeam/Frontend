import Link from 'next/link'
import React from 'react'

interface ChevronRightProps {
	link?: string
}

const ChevronRight: React.FC<ChevronRightProps> = ({ link = '/' }) => {
	return (
		<Link href={link} passHref>
			<svg className="w-4 h-4 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
			</svg>
		</Link>
	)
}

export default ChevronRight
