import React from 'react'
import Link from 'next/link'
import Burger from 'public/icons/burger.svg'
import Image from 'next/image'
import Logo from 'public/icons/logo.png'
import { useAppSelector } from '../../hooks/reduxHooks'
interface HeadProps {
	handleClick?: () => void
}

const Head = ({ handleClick }: HeadProps) => {
	const user = useAppSelector((state) => state.user.user)
	return (
		<header className="w-full min-w-max h-[75px] px-6 flex justify-between items-center sticky top-0 bg-white z-20">
			<div onClick={() => handleClick && handleClick()}>
				<Burger className="w-6 h-6 cursor-pointer" />
			</div>
			<Link href="/">
				<a className="w-[165px] h-[32px]">
					<Image src={Logo} alt="logo" />
				</a>
			</Link>

			{!user ? (
				<Link href="/login">
					<a className="font-semibold">로그인</a>
				</Link>
			) : (
				<svg className="w-7 h-7 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
					></path>
				</svg>
			)}
		</header>
	)
}

export default Head
