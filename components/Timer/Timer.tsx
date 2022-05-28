import { useTimer } from 'hooks/useTimer'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setisTimerDone } from 'redux/slices/popup'

interface ITimerProps {
	time: number
	cls?: string
}

const Timer: React.FC<ITimerProps> = ({ time, cls }) => {
	const dispatch = useDispatch()
	const [currentTime, setCurrentTime] = useState(time)
	const [text, setText] = useState(() => {
		if (currentTime) {
			const minute = Math.floor(currentTime / 60).toFixed()
			const second = currentTime % 60
			return `${minute} : ${second ? (second < 10 ? '0' + second : second) : '00'}`
		}
	})
	const style = 'text-red-400 text-[14px] ' + cls
	const decreaseTime = useCallback(() => {
		if (currentTime) {
			const minute = Math.floor(currentTime / 60).toFixed()
			const second = currentTime % 60
			setText(`${minute} : ${second ? (second < 10 ? '0' + second : second) : '00'}`)
			setCurrentTime(currentTime - 1)
		} else {
			setText('0 : 00')
			setCurrentTime(0)
			dispatch(setisTimerDone(true))
		}
	}, [currentTime, setCurrentTime, dispatch])

	useEffect(() => {
		const index = setInterval(decreaseTime, 1000)
		return () => {
			clearInterval(index)
			dispatch(setisTimerDone(false))
		}
	}, [decreaseTime, dispatch])
	return <span className={style}>{text}</span>
}

export default Timer
