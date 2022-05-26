import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { popUpSelector, togglePopup } from 'redux/slices/popup'
import PopupChild from './PopupChild'

export interface GreenPopUpProps {
	children?: ReactNode
}

const GreenPopUp = ({ children }: GreenPopUpProps) => {
	const dispatch = useDispatch()
	const toggle = useSelector(popUpSelector)
	const ref = useRef<HTMLDivElement | null>(null)
	const [mount, setMount] = useState(false)
	const onToggleClick = () => {
		dispatch(togglePopup(false))
	}

	useEffect(() => {
		ref.current = document.querySelector('#pop-up')
		setMount(true)
		return () => setMount(false)
	}, [])

	return !toggle && mount && ref.current
		? createPortal(
				<div
					className="absolute top-0 h-full w-full transition bg-[rgba(0,0,0,0.68)] z-40 flex justify-center items-center px-[50px]"
					onClick={onToggleClick}
				>
					<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-[#F6F6F6] px-[40px] py-[15px] flex flex-col items-center justify-center space-y-[15px]">
						<PopupChild>{children}</PopupChild>
					</div>
				</div>,
				document.getElementById('pop-up') as HTMLElement
		  )
		: null
}

export default GreenPopUp
