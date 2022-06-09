import { useDispatch, useSelector } from 'react-redux'
import { popupisTimerDoneSelector, setIsReset } from 'redux/slices/popup'

const useTimer = () => {
	const dispatch = useDispatch()
	const isTimerDone = useSelector(popupisTimerDoneSelector)
	const resetTimer = () => {
		dispatch(setIsReset(true))
	}
	return {
		isTimerDone,
		resetTimer
	}
}

export { useTimer }
