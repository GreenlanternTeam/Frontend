import NavWrapper from 'components/nav/NavWrapper'
import NavMyPage from 'components/nav/NavMyPage'
import React from 'react'

const NavContents = () => {
	return (
		<div className="pt-10">
			<NavMyPage title="home" />
			<div>
				<NavWrapper title="home" />
				<NavWrapper title="about" />
				<NavWrapper title="category" href="category" />
				<NavWrapper title="brand" href="vendor" />
				<NavWrapper title="magazine" />
			</div>
		</div>
	)
}

export default NavContents
