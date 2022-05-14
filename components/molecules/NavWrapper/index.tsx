import NavIcon from 'components/atoms/NavIcon'
import NavTitle from 'components/atoms/NavTitle'
import React from 'react'
import Link from 'next/link'

interface NavWrapperProps {
	title: 'home' | 'about' | 'category' | 'brand' | 'magazine'
	href?: string
}

const NavWrapper: React.FC<NavWrapperProps> = ({ title, href = '/' }) => {
	return (
		<Link href={href}>
			<a className="w-[150px] h-[100px] flex flex-col justify-center items-center space-y-[10px] transition-all opacity-60 hover:opacity-100 hover:bg-[#F7F2DC]">
				<NavIcon title={title} />
				<NavTitle title={title} />
			</a>
		</Link>
	)
}

export default NavWrapper
