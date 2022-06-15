import React from 'react'

interface SubTextProps {
	className?: string
	text: string
}

const SubText: React.FC<SubTextProps> = ({ className, text }) => {
	return <span className={className}>{text}</span>
}

export default SubText
