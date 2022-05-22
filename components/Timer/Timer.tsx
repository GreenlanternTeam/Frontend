import React, { useCallback, useEffect, useState } from 'react'

interface ITimerProps {
	time: number
}

const Timer: React.FC<ITimerProps> = ({ time }) => {
	const [timer, setTimer] = useState(time)
	const [text, setText] = useState(() => {
		const minute = Math.floor(timer / 60).toFixed()
		const second = timer % 60
		return `${minute} : ${second ? second : '00'}`
	})
	const decreaseTime = useCallback(() => {
		const minute = Math.floor(timer / 60).toFixed()
		const second = timer % 60
		setText(`${minute} : ${second ? second : '00'}`)
		setTimer((prev) => prev - 1)
	}, [timer])
	useEffect(() => {
		const index = setInterval(decreaseTime, 1000)
		return () => clearInterval(index)
	}, [decreaseTime])
	return <span>{text}</span>
}

export default Timer
