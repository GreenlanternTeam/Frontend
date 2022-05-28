import { RootState } from 'redux/store'
import { createSlice } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

interface Popupstate {
	showPopUp: boolean
	content: ReactNode | null
	result: boolean
	timer: number | null
	isTimerDone: boolean
}

const initialState: Popupstate = {
	showPopUp: false,
	content: null,
	result: false,
	timer: null,
	isTimerDone: true
}

const popup = createSlice({
	name: 'popup',
	initialState,
	reducers: {
		togglePopup: (state, { payload }) => {
			state.showPopUp = payload
		},
		setContent: (state, { payload }) => {
			state.content = payload
		},
		setResult: (state, { payload }) => {
			state.result = payload
		},
		setTime: (state, { payload }) => {
			if (payload >= 0) {
				state.timer = payload
				state.isTimerDone = false
			} else {
				state.isTimerDone = true
			}
		}
	}
})

export const { togglePopup, setContent, setResult, setTime } = popup.actions
export const popUpSelector = (state: RootState) => state.popup.showPopUp
export const popupContentSelector = (state: RootState) => state.popup.showPopUp
export const popupResultSelector = (state: RootState) => state.popup.result
export const popupTimerSelector = (state: RootState) => state.popup.timer
export const popupisTimerDoneSelector = (state: RootState) => state.popup.isTimerDone
export default popup.reducer
