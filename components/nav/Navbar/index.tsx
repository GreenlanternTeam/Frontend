import NavContents from 'components/nav/Navbar/NavContent'
import React from 'react'

interface NavigationProps {
	toggle: boolean
	setToggle: (value: React.SetStateAction<boolean>) => void
}

const Navigation: React.FC<NavigationProps> = ({ toggle, setToggle }) => {
	return (
		<div className="fixed top-0 h-full w-full z-50">
			<div className={`h-full flex items-center transition ${!toggle ? 'w-0' : 'w-[150px]'} bg-white `}>
				<NavContents />
			</div>
			<div onClick={() => setToggle((prev) => false)} className="fixed top-0 w-[32rem] h-full opacity-70 bg-black -z-10" />
		</div>
	)
}

export default Navigation
