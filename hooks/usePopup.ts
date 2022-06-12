import { popupResultSelector, setResult } from './../redux/slices/popup'

import { useDispatch, useSelector } from 'react-redux'
import { togglePopup } from 'redux/slices/popup'
import { useState } from 'react'

type stateType<T> = T | null

function usePopup<T>(initialKey: stateType<T> = null) {
	const dispatch = useDispatch()
	const [key, setKey] = useState<T>(initialKey!)

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
		setSuccess,
		valid: key,
		setValid: setKey
	}
}

export { usePopup }
