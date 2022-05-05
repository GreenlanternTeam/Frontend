import Head from '../../components/Head'
import React, { useState } from 'react'
import { ChildProps } from 'types/LayoutType'

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
