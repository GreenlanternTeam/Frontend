import { useMutation } from 'react-query'
import { login, SignUpResponse, SignUpType } from 'api/auth'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { getUsers } from 'redux/slices/login'
import { LoginResponse } from 'types/SignUpType'
import { LoginType } from 'types/LoginType'
import { checkLogin } from 'api/auth'

const useLogin = () => {
	const { mutate } = useMutation<LoginResponse, AxiosError, LoginType>(login, {
		onSuccess: (data) => {
			localStorage.setItem('access_token', data.data.access_token)
			localStorage.setItem('refresh_token', data.data.refresh_token)
			dispatch(getUsers(data.data.user))
			checkLogin()
			router.push('/')
		},

		onError: (error) => {
			console.log(error)
		}
	})
	const router = useRouter()
	const dispatch = useDispatch()

	return { mutate }
}

export default useLogin
