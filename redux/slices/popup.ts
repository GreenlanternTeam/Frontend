import { RootState } from 'redux/store'
import { createSlice } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

interface Popupstate {
	showPopUp: boolean
	content: ReactNode | null
}

const initialState: Popupstate = {
	showPopUp: false,
	content: null
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
		}
	}
})

export const { togglePopup, setContent } = popup.actions
export const popUpSelector = (state: RootState) => state.popup.showPopUp
export const popupContentSelector = (state: RootState) => state.popup.showPopUp
export default popup.reducer
