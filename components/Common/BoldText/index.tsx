import React from 'react'
import { classNames } from 'utils/fn'
interface BoldTextProps {
	text: string
	upper?: boolean
}

const BoldText: React.FC<BoldTextProps> = ({ text, upper }) => {
	return <h1 className={classNames('font-semibold text-lg', upper ? 'uppercase' : '')}>{text}</h1>
}

export default BoldText
