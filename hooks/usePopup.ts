import { ReactNode } from 'react'

import { useDispatch } from 'react-redux'
import { togglePopup } from 'redux/slices/popup'

const usePopup = () => {
	const dispatch = useDispatch()

	const setPopupShow = (isShow: boolean) => {
		dispatch(togglePopup(isShow))
	}

	const closePopup = () => {
		dispatch(togglePopup(false))
	}

	return {
		setPopupShow,
		closePopup
	}
}

export { usePopup }
