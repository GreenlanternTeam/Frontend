import { useSelector } from 'react-redux'
import { popupisTimerDoneSelector } from 'redux/slices/popup'

const useTimer = () => {
	const isTimerDone = useSelector(popupisTimerDoneSelector)

	return {
		isTimerDone
	}
}

export { useTimer }
