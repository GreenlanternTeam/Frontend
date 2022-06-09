import React, { useState } from 'react'

const Heart = () => {
	const [state, setState] = useState(false)
	return (
		<svg
			onClick={() => setState((prev) => !prev)}
			className={`${state ? 'fill-[#F44336]' : 'fill-none'} ${state ? 'stroke-none' : 'stroke-black'} transition-all`}
			width="30"
			height="30"
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8.75 3.75C5.29875 3.75 2.5 6.52 2.5 9.9375C2.5 12.6962 3.59375 19.2438 14.36 25.8625C14.5529 25.9798 14.7743 26.0419 15 26.0419C15.2257 26.0419 15.4471 25.9798 15.64 25.8625C26.4062 19.2438 27.5 12.6962 27.5 9.9375C27.5 6.52 24.7012 3.75 21.25 3.75C17.7988 3.75 15 7.5 15 7.5C15 7.5 12.2012 3.75 8.75 3.75Z"
				strokeOpacity="0.8"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default Heart
