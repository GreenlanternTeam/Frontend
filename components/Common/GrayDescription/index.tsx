import React from 'react'

interface GrayDescription {
	text: string
}

const GrayDescription: React.FC<GrayDescription> = ({ text }) => {
	return (
		<div className="w-full text-xs text-[#666666] text-center flex justify-center">
			<p>{text}</p>
		</div>
	)
}

export default GrayDescription
