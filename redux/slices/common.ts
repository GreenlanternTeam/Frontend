import { RootState } from 'redux/store'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const common = createSlice({
	name: 'common',
	initialState,
	reducers: {}
})

export default common.reducer
