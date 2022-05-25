import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { login } from 'api/auth'
import { LoginType } from 'types/LoginType'

const loginUser = createAsyncThunk('users/login', async (user: LoginType) => {
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
export const { getUsers, setUsers } = userSlice.actions
export default userSlice.reducer
