import { combineReducers } from '@reduxjs/toolkit'
import user from './slices/login'

const reducer = combineReducers({
	user
})

export default reducer
