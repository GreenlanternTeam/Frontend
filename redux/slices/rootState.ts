import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
	text: 0,
	num: 0
}

const rootState = createSlice({
	name: 'test',
	initialState,
	reducers: {
		someAction: (state, { payload }: PayloadAction<number>) => {
			state.num = state.num + 1
		}
	}
})

export default rootState.reducer
