import NavWrapper from 'components/molecules/NavWrapper'
import React from 'react'

const NavContents = () => {
	return (
		<div>
			<NavWrapper title="home" />
			<NavWrapper title="about" />
			<NavWrapper title="category" href="category" />
			<NavWrapper title="brand" />
			<NavWrapper title="magazine" />
		</div>
	)
}

export default NavContents
