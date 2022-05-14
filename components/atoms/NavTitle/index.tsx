import React from 'react'

interface NavTitleProps {
	title: 'home' | 'about' | 'category' | 'brand' | 'magazine'
}

const NavTitle: React.FC<NavTitleProps> = ({ title }) => {
	return <span className="text-[#000000] font-semibold text-sm">{title}</span>
}

export default NavTitle
