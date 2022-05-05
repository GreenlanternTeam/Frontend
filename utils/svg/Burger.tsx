import React, { HTMLAttributes } from 'react'

const Burger: React.FC<HTMLAttributes<HTMLElement>> = ({ className }) => {
	return (
		<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M22 5C22 5.55229 21.5523 6 21 6L3 6C2.44772 6 2 5.55228 2 5C2 4.44772 2.44772 4 3 4H21C21.5523 4 22 4.44772 22 5ZM22 12C22 12.5523 21.5523 13 21 13L3 13C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11L21 11C21.5523 11 22 11.4477 22 12ZM21 20C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18L3 18C2.44772 18 2 18.4477 2 19C2 19.5523 2.44772 20 3 20L21 20Z"
				fill="black"
				fillOpacity="0.8"
			/>
		</svg>
	)
}

export default Burger