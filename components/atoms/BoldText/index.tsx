import React from 'react'
interface BoldTextProps {
	text: string
}

const BoldText: React.FC<BoldTextProps> = ({ text }) => {
	return <h1 className="font-semibold text-lg">{text}</h1>
}

export default BoldText
