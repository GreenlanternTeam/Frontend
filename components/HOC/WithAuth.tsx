import React from 'react'
import { getAcessToekn } from 'utils/getToken'
import { useRouter } from 'next/router'

const WithAuth = (Components: React.ElementType, isLogin: boolean) => {
	const token = getAcessToekn()

	const Auth = () => {
		const router = useRouter()
		if (!token) {
			router.push('/login')
		} else if (token && !isLogin) {
			return <Components />
		} else if (isLogin) router.back()
	}

	return Auth
}

export default WithAuth
