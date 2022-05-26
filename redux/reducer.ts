import { combineReducers } from '@reduxjs/toolkit'
import user from './slices/login'
import common from './slices/common'
import popup from './slices/popup'

const reducer = combineReducers({
	user,
	common,
	popup
})

export default reducer
