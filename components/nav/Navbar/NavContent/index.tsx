import NavWrapper from 'components/nav/NavWrapper'
import NavMyPage from 'components/nav/NavMyPage'
import React from 'react'
import { useAppSelector } from 'hooks/reduxHooks'

const NavContents = () => {
	const user = useAppSelector((state) => state.user.user)
	return (
		<div className="pt-10">
			{user && <NavMyPage user={user} />}
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
