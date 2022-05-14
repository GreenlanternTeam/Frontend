import React from 'react'
import * as Icons from './utils'

interface NavIconProps {
	title: 'home' | 'about' | 'category' | 'brand' | 'magazine'
}

const NavIcon: React.FC<NavIconProps> = ({ title }) => {
	const Icon = Icons[title]
	return <Icon />
}

export default NavIcon
