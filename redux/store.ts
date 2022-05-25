import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'

export const store = configureStore({
	reducer,
	middleware:
		process.env.NODE_ENV !== 'production'
			? (getDefaultMiddleware) => getDefaultMiddleware()
			: (getDefaultMiddleware) => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production'
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type { RootState, AppDispatch }
