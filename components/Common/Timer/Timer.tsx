import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { popupIsResetSelector, setIsReset, setisTimerDone } from 'redux/slices/popup'

interface ITimerProps {
	time: number
	cls?: string
}

const Timer: React.FC<ITimerProps> = ({ time, cls }) => {
	const dispatch = useDispatch()
	const isReset = useSelector(popupIsResetSelector)
	const [currentTime, setCurrentTime] = useState(time)
	const style = 'text-red-400 text-[14px] ' + cls
	const decreaseTime = useCallback(() => {
		if (currentTime) {
			setCurrentTime(currentTime - 1)
		} else {
			dispatch(setisTimerDone(true))
		}
	}, [currentTime, dispatch])

	useEffect(() => {
		const index = setInterval(decreaseTime, 1000)
		return () => {
			clearInterval(index)
			dispatch(setisTimerDone(false))
		}
	}, [decreaseTime, dispatch, currentTime])

	useEffect(() => {
		if (isReset) {
			setCurrentTime(time)
			dispatch(setIsReset(false))
		}
	}, [isReset, dispatch, time])

	const timerText = () => {
		const minute = Math.floor(currentTime / 60).toFixed()
		const second = currentTime % 60
		return `${minute} : ${second ? (second < 10 ? '0' + second : second) : '00'}`
	}
	return <span className={style}>{timerText()}</span>
}

export default Timer
