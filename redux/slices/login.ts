import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { login } from 'api/auth'
import { RootState } from 'redux/store'
import { LoginType } from 'types/LoginType'

const loginUser = createAsyncThunk('users/check', async (user: LoginType) => {
	const response = await login(user)
	return response
})

const initialState = {
	loading: false,
	isLoggedIn: false,
	user: null
}

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		getUsers: (state, action) => {
			state.user = action.payload
		},
		setUsers: (state, action) => {
			state.user = action.payload
			state.isLoggedIn = true
		}
	}
})

export { loginUser }
export const getUser = (state: RootState) => state.user.user
export const { getUsers, setUsers } = userSlice.actions
export default userSlice.reducer
