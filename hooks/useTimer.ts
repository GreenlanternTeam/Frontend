import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { popupisTimerDoneSelector, popupTimerSelector, setTime } from 'redux/slices/popup'

const useTimer = (time?: number | null) => {
	const dispatch = useDispatch()

	const isTimerDone = useSelector(popupisTimerDoneSelector)
	const setTimer = (payload: number | null) => {
		dispatch(setTime(payload))
	}
	const currentTime = useSelector(popupTimerSelector)
	useEffect(() => {
		if (time) {
			dispatch(setTime(time))
		}
	}, [time, dispatch])
	return {
		currentTime,
		isTimerDone,
		setTimer
	}
}

export { useTimer }
