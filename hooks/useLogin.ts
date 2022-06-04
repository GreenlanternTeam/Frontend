import { useMutation } from 'react-query'
import { login } from 'api/auth'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { getUsers } from 'redux/slices/login'
import { LoginResponse } from 'types/LoginType'
import { LoginType } from 'types/LoginType'
import { LoginError } from 'types/LoginType'
import { AxiosError } from 'axios'
import { useState } from 'react'

const useLogin = () => {
	const [loginError, setLoginError] = useState<LoginType>({
		email: '',
		password: ''
	})
	const { mutate } = useMutation<LoginResponse, AxiosError, LoginType>(login, {
		onSuccess: (data) => {
			localStorage.setItem('access_token', data.access_token)
			localStorage.setItem('refresh_token', data.refresh_token)
			dispatch(getUsers(data.user))
			router.push('/')
		},

		onError: (error: any) => {
			const errorType = error.response.data

			if (errorType.email)
				setLoginError({
					...loginError,
					email: errorType.email
				})
			else
				setLoginError({
					...loginError,
					password: errorType.password
				})
		}
	})
	const router = useRouter()
	const dispatch = useDispatch()

	return { mutate, loginError, setLoginError }
}

export default useLogin
