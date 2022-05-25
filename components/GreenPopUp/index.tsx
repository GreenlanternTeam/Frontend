import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { popUpSelecter, togglePopUp } from 'redux/slices/common'

const GreenPopUp = () => {
	const dispatch = useDispatch()
	const toggle = useSelector(popUpSelecter)

	const onToggleClick = () => {
		dispatch(togglePopUp(!toggle))
	}
	return toggle ? (
		<div
			className="fixed top-0 h-screen w-[32rem] transition bg-[rgba(0,0,0,0.68)] z-40 flex justify-center items-center px-[50px]"
			onClick={onToggleClick}
		>
			<div className="w-full h-1/2 bg-[#F6F6F6]" />
		</div>
	) : null
}

export default GreenPopUp
