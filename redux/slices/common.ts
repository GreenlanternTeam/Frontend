import { RootState } from 'redux/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
	showPopUp: false
}

const common = createSlice({
	name: 'common',
	initialState,
	reducers: {
		togglePopUp: (state, { payload }) => {
			state.showPopUp = payload
		}
	}
})

export const { togglePopUp } = common.actions
export const popUpSelecter = (state: RootState) => state.common.showPopUp
export default common.reducer
