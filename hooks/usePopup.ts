import { popupResultSelector, setResult } from './../redux/slices/popup'

import { useDispatch, useSelector } from 'react-redux'
import { togglePopup } from 'redux/slices/popup'
import { useEffect } from 'react'

const usePopup = () => {
	const dispatch = useDispatch()

	const setPopupShow = (isShow: boolean) => {
		dispatch(togglePopup(isShow))
	}

	const closePopup = () => {
		dispatch(togglePopup(false))
	}

	const isSuccess = useSelector(popupResultSelector)
	const setSuccess = (payload: any) => {
		dispatch(setResult(payload))
	}

	return {
		setPopupShow,
		closePopup,
		isSuccess,
		setSuccess
	}
}

export { usePopup }
