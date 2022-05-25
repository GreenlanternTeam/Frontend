import { combineReducers } from '@reduxjs/toolkit'
import user from './slices/login'
import common from './slices/common'

const reducer = combineReducers({
	user,
	common
})

export default reducer
