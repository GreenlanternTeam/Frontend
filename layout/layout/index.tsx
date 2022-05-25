import Head from '../../components/Head'
import React, { useState } from 'react'
import styled from 'styled-components'
import { ChildProps } from 'types/LayoutType'
import Navigation from 'components/Navbar'

const NavWrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 49;
`

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
