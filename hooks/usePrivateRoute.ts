import { useEffect } from 'react'
import { getAcessToekn } from 'utils/getToken'
import { useRouter } from 'next/router'

const usePrivateRoute = () => {
	const token = getAcessToekn()
	const router = useRouter()

	if (token) router.push('/')
	else return
}

export default usePrivateRoute
