import Head from '../../components/Head'
import React, { useState } from 'react'
import styled from 'styled-components'
import { ChildProps } from 'types/LayoutType'

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
				{toggle && (
					<div className="fixed top-0 h-full w-full z-50">
						<div className={`h-full transition ${!toggle ? 'w-0' : 'w-[150px]'} bg-white `}></div>
						<div onClick={() => setToggle((prev) => false)} className="fixed top-0 w-[32rem] h-full opacity-70 bg-black -z-10" />
					</div>
				)}
			</div>
		</>
	)
}
