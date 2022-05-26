export const getAcessToekn = () => {
	if (typeof window !== 'undefined') return window.localStorage.getItem('access_token')
	return undefined
}

export const getRefreshToken = () => {
	if (typeof window !== 'undefined') return window.localStorage.getItem('refresh_token')
	return undefined
}

export const setAcessToekn = (token: string) => {
	if (typeof window !== 'undefined') return window.localStorage.setItem('access_token', token)
	return undefined
}
