import { AnimatePresence, motion, Variants } from 'framer-motion'
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

	const popupVariants: Variants = {
		initial: {
			opacity: 0
		},
		start: {
			opacity: 1,
			transition: {
				type: 'tween'
			}
		},
		exit: {
			opacity: 0,
			transition: {
				type: 'tween'
			}
		}
	}

	return (
		ref.current &&
		createPortal(
			<AnimatePresence>
				{toggle && mount && (
					<>
						<div
							onClick={onToggleClick}
							className="absolute top-0 h-full w-full transition bg-[rgba(0,0,0,0.68)] z-40 flex justify-center items-center px-[50px]"
						/>
						<motion.div
							variants={popupVariants}
							initial="initial"
							animate="start"
							exit="exit"
							className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-[#F6F6F6] px-[40px] py-[15px] flex flex-col items-center justify-center space-y-[15px] z-50"
						>
							<PopupChild>{children}</PopupChild>
						</motion.div>
					</>
				)}
			</AnimatePresence>,
			document.getElementById('pop-up') as HTMLElement
		)
	)
}

export default GreenPopUp
