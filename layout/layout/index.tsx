import Head from '../../components/Head'
import React, { useState } from 'react'
import { ChildProps } from 'types/LayoutType'
import Navigation from 'components/Navbar'

interface LayoutProps extends ChildProps {
	title?: string
}

export default function Layout({ title, children }: LayoutProps) {
	const [toggle, setToggle] = useState(false)
	return (
		<>
			<div className="relative">
				<Head handleClick={() => setToggle((prev) => true)} />
				{children}
				{toggle && <Navigation toggle={toggle} setToggle={setToggle} />}
			</div>
		</>
	)
}
