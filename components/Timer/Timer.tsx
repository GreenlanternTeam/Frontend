import React, { useCallback, useEffect, useState } from 'react'

interface ITimerProps {
	time: number
	cls?: string
}

const Timer: React.FC<ITimerProps> = ({ time, cls }) => {
	const [timer, setTimer] = useState(time)
	const [text, setText] = useState(() => {
		const minute = Math.floor(timer / 60).toFixed()
		const second = timer % 60
		return `${minute} : ${second ? second : '00'}`
	})
	const style = 'text-red-400 text-[14px] ' + cls
	const decreaseTime = useCallback(() => {
		if (timer) {
			const minute = Math.floor(timer / 60).toFixed()
			const second = timer % 60
			setText(`${minute} : ${second ? (second < 10 ? '0' + second : second) : '00'}`)
			setTimer((prev) => prev - 1)
		} else {
			setText('0 : 00')
			setTimer(0)
		}
	}, [timer])
	useEffect(() => {
		const index = setInterval(decreaseTime, 1000)
		return () => clearInterval(index)
	}, [decreaseTime])
	return <span className={style}>{text}</span>
}

export default Timer
