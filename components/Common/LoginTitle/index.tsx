import React from 'react'

interface LoginTitleProps {
	text?: string
	className?: string
}

const LoginTitle: React.FC<LoginTitleProps> = ({ text, className }) => {
	return <h3 className={`w-[100px] h-[24px] text-xl leading-6 font-medium text-center ${className}`}>{text}</h3>
}

export default LoginTitle
