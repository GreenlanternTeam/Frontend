import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { login } from 'api/auth'
import { LoginType } from 'types/LoginType'

const loginUser = createAsyncThunk('users/login', async (user: LoginType) => {
	const response = await login(user)
	return response
})

const initialState = {
	loading: false,
	user: {}
}

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		getUsers: (state, action) => {
			state.user = action.payload
		}
	}
})

export { loginUser }
export default userSlice.reducer
