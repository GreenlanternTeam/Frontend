import { configureStore } from '@reduxjs/toolkit'
import slices from './slices/rootState'

export const store = configureStore({
	reducer: {
		root: slices
	},
	middleware:
		process.env.NODE_ENV !== 'production'
			? (getDefaultMiddleware) => getDefaultMiddleware()
			: (getDefaultMiddleware) => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production'
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type { RootState, AppDispatch }
