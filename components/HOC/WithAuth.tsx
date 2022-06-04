import React from 'react'
import { getAcessToekn } from 'utils/getToken'
import { useRouter } from 'next/router'

const WithAuth = (Components: React.ElementType, iSLogin: boolean) => {
	const token = getAcessToekn()

	const Auth = () => {
		const router = useRouter()
		if (!token) {
			router.push('/login')
		} else if (token && !iSLogin) {
			return <Components />
		} else return undefined
	}

	return Auth
}

export default WithAuth
